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
  const [popupPoint] = useState<Point>()
  const [openPopup] = useState(false)

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
