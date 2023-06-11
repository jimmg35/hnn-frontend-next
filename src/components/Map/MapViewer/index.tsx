"use client";
import React, { useRef, useState } from 'react'
import style from './index.module.scss'
import '@arcgis/core/assets/esri/themes/light/main.css'
import useMap from '../../../hooks/useMap'
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
