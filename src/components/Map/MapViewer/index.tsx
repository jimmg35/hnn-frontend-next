"use client";
import React, { useEffect, useRef, useState } from 'react'
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js"
import DefaultTemplate from '../../MapPopup/DefaultTemplate'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Point from "@arcgis/core/geometry/Point"
import useMap from '../../../hooks/useMap'
import style from './index.module.scss'
import MapPopup from '../../MapPopup'
import { useLazyListByExtentQuery } from '@/store/services/apr'
import { CircularProgress } from '@mui/material'
import { renderer } from './renderer'

const mapOptions = {
  mapOption: { basemap: 'arcgis-dark-gray' },
  mapViewOption: {}
}

const MapViewer = () => {
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

  useEffect(() => {
    loadGeojsonLayer()
  }, [])

  return (
    <>
      <div className={style.Loading}>
        <CircularProgress style={{ width: '100px', height: '100px' }} />
        <p>Loading map and data...</p>
      </div>
      <div className={style.MapViewer} ref={mapRef}></div>
      {/* ref={mapRef} */}
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
