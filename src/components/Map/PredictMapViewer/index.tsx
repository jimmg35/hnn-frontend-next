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
import { CircularProgress } from '@mui/material'

const bufferPointId = 'bufferPointLayer'
const bufferCircleId = 'bufferCircleLayer'

const minimizeFloat = (num: number) => {
  return parseInt((num * 10000).toString()) / 10000
}

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

const PredictMapViewer = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const [popupPoint] = useState<Point>()
  const [openPopup] = useState(false)

  return (
    <>

      {/* <LoadingScreen /> */}

      <div className={classNames({
        [style.PredictMapViewer]: true
      })} ref={mapRef}></div>
      {/* <MapPopup
        point={popupPoint}
        open={openPopup}
        view={asyncMapView}
        mapRef={mapRef}
      >
        <DefaultTemplate />
      </MapPopup> */}
    </>
  )
}

export default PredictMapViewer

