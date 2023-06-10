"use client";
import React, { useRef, useEffect, useState } from 'react'
import style from './index.module.scss'
import '@arcgis/core/assets/esri/themes/light/main.css'
import useMap from '../../../hooks/useMap'
import DefaultUI from '@arcgis/core/views/ui/DefaultUI'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import MapPopup from '../../MapPopup'
import DefaultTemplate from '../../MapPopup/DefaultTemplate'
import Point from "@arcgis/core/geometry/Point"


const mapOptions = {
  mapOption: { basemap: 'arcgis-dark-gray' },
  mapViewOption: {}
}

const MapViewer = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const [popupPoint, setPopupPoint] = useState<Point>()
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <div className={style.MapViewer} ref={mapRef}></div>
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
