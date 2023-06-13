"use client";
import React, { useContext, useEffect, useRef, useState } from 'react'
import QueryContext from '@/containers/QueryContainer/QueryContext'
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js"
import DefaultTemplate from '../../MapPopup/DefaultTemplate'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Point from "@arcgis/core/geometry/Point"
import useMap from '../../../hooks/useMap'
import style from './index.module.scss'
import MapPopup from '../../MapPopup'
import classNames from 'classnames'
import Collection from "@arcgis/core/core/Collection.js"
import Graphic from "@arcgis/core/Graphic.js"
import { useLazyListByExtentQuery } from '@/store/services/apr'
import { CircularProgress } from '@mui/material'
import { renderer } from './renderer'
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js"
import Circle from "@arcgis/core/geometry/Circle.js"
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js"

const bufferPointId = 'bufferPointLayer'
const bufferCircleId = 'bufferCircleLayer'

const minimizeFloat = (num: number) => {
  return parseInt((num * 10000).toString()) / 10000
}

const mapOptions = {
  mapOption: { basemap: 'arcgis-dark-gray' },
  mapViewOption: {}
}

const MapViewer = () => {
  const { isPickerActive, bufferRadius, onMapPick } = useContext(QueryContext)
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const [popupPoint, setPopupPoint] = useState<Point>()
  const [openPopup, setOpenPopup] = useState(false)
  const [getByExtent] = useLazyListByExtentQuery()

  const loadGeojsonLayer = async () => {
    const map = await asyncMap
    const response = await getByExtent({})
    const blob = new Blob([JSON.stringify(response.data)], {
      type: "application/json"
    })
    const url = URL.createObjectURL(blob)
    const geojsonLayer = new GeoJSONLayer({ url, renderer: renderer })
    map.add(geojsonLayer)
  }

  const addPickerGraphic = async (mapPoint: Point) => {
    if (!isPickerActive) return
    const map = await asyncMap
    const pointGraphic = new Graphic({
      geometry: mapPoint,
      symbol: new PictureMarkerSymbol({
        url: '/picker.png',
        width: '30px',
        height: '30px',
        yoffset: 10
      })
    })

    const bufferGraphic = new Graphic({
      geometry: new Circle({
        center: [mapPoint.longitude, mapPoint.latitude] as any,
        // geodesic: true,
        numberOfPoints: 100,
        radius: bufferRadius,
        radiusUnit: 'meters'
      }),
      symbol: new SimpleFillSymbol({
        style: "solid",
        outline: { width: 1.5, color: [255, 97, 13, 1] },
        color: [255, 116, 0, 0.11]
      })
    })

    const pointLayer = new GraphicsLayer({
      id: bufferPointId,
      graphics: [pointGraphic]
    })
    const circleLayer = new GraphicsLayer({
      id: bufferCircleId,
      graphics: [bufferGraphic]
    })

    map.add(circleLayer)
    map.add(pointLayer)



  }

  const handleMapClick = async (event: __esri.ViewClickEvent) => {
    if (!isPickerActive) return
    const view = await asyncMapView
    const { mapPoint } = event
    const { longitude, latitude } = view.toMap({ x: mapPoint.longitude, y: mapPoint.latitude })
    await addPickerGraphic(mapPoint)
    onMapPick(minimizeFloat(longitude), minimizeFloat(latitude))
  }

  const loadClickListener = async () => {
    const view = await asyncMapView
    view.on("click", handleMapClick);
  }

  useEffect(() => {
    loadGeojsonLayer()
  }, [])

  useEffect(() => {
    loadClickListener()
  }, [isPickerActive])

  return (
    <>
      <div className={style.Loading}>
        <CircularProgress style={{ width: '100px', height: '100px' }} />
        <p>Loading map and data...</p>
      </div>
      <div className={classNames({
        [style.MapViewer]: true,
        [style.active]: isPickerActive
      })} ref={mapRef}></div>
      <MapPopup
        point={popupPoint}
        open={openPopup}
        view={asyncMapView}
        mapRef={mapRef}
      >
        <DefaultTemplate />
      </MapPopup>
    </>
  )
}

export default MapViewer


      // const layer = new WMSLayer({
      //   title: 'ndvi2018',
      //   url: "http://localhost:9032/geoserver/hnn/wms", // 您的WMS服务URL
      //   sublayers: [
      //     {
      //       name: "hnn:ndvi2018" // 图层名称
      //     }
      //   ]
      // });
      // console.log(layer)
      // map.add(layer)
      // view.when(() => {
      //   view.goTo(layer.fullExtent)
      // })
