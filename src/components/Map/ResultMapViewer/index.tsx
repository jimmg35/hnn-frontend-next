"use client";
import React, { useContext, useEffect, useRef, useState } from 'react'
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js"
import DefaultTemplate from '../../MapPopup/DefaultTemplate'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Point from "@arcgis/core/geometry/Point"
import useMap from '../../../hooks/useMap'
import style from './index.module.scss'
import MapPopup from '../../MapPopup'
import classNames from 'classnames'
import { CircularProgress } from '@mui/material'
import { hoveredRenderer, renderer } from './renderer'
import { useSelector } from 'react-redux';
import { selectApr } from '@/store/slice/apr';
import { SpatialQueryResponse } from '@/store/services/types/apr';
import ResultContext from '@/containers/ResultContainer/ResultContext';

const hoverPointId = 'hoverPointLayer'
const selectedPointId = 'selectedPointLayer'

const mapOptions = {
  mapOption: { basemap: 'arcgis-dark-gray' },
  mapViewOption: {}
}

const LoadingScreen = () => {
  return (
    <div className={style.Loading}>
      <CircularProgress style={{ width: '100px', height: '100px' }} />
      <p>Loading map and data...</p>
    </div>
  )
}

const ResultMapViewer = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const { resultApr } = useSelector(selectApr)
  const { hoverApr, selectedApr } = useContext(ResultContext)
  const [popupPoint] = useState<Point>()
  const [openPopup] = useState(false)

  const conver2Geojson = (data: SpatialQueryResponse[]) => {
    return data.map((item) => ({
      type: 'Feature',
      geometry: {
        type: item.geometry.type,
        coordinates: item.geometry.coordinates,
      },
      properties: {
        id: item.id
      }
    }))
  }

  const loadGeojsonLayer = async () => {
    const geojson = {
      "type": "FeatureCollection",
      "features": conver2Geojson(resultApr)
    }
    const map = await asyncMap
    const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json"
    })
    const url = URL.createObjectURL(blob)
    const geojsonLayer = new GeoJSONLayer({ url, renderer: renderer })
    map.add(geojsonLayer)
  }

  const handleHoverLayer = async () => {
    const map = await asyncMap
    if (!hoverApr) {
      const layer = map.findLayerById(hoverPointId)
      map.remove(layer)
      return
    }
    const geojson = {
      "type": "FeatureCollection",
      "features": conver2Geojson([hoverApr])
    }
    const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json"
    })
    const url = URL.createObjectURL(blob)
    const geojsonLayer = new GeoJSONLayer({ url, renderer: hoveredRenderer, id: hoverPointId })
    map.add(geojsonLayer)
  }


  const handleSelectedLayer = async () => {
    const map = await asyncMap
    const layer = map.findLayerById(selectedPointId)
    map.remove(layer)
    const geojson = {
      "type": "FeatureCollection",
      "features": conver2Geojson(selectedApr)
    }
    const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json"
    })
    const url = URL.createObjectURL(blob)
    const geojsonLayer = new GeoJSONLayer({ url, renderer: hoveredRenderer, id: selectedPointId })
    map.add(geojsonLayer)
  }


  useEffect(() => {
    loadGeojsonLayer()
  }, [])

  useEffect(() => {
    handleHoverLayer()
  }, [hoverApr])

  useEffect(() => {
    handleSelectedLayer()
  }, [selectedApr])


  return (
    <>
      <LoadingScreen />
      <div className={classNames({
        [style.MapViewer]: true
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

export default ResultMapViewer
