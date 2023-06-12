"use client";
import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import '@arcgis/core/assets/esri/themes/light/main.css'
import useMap from '../../../hooks/useMap'
import MapPopup from '../../MapPopup'
import DefaultTemplate from '../../MapPopup/DefaultTemplate'
import Point from "@arcgis/core/geometry/Point"
import WMSLayer from "@arcgis/core/layers/WMSLayer.js";

const mapOptions = {
  mapOption: { basemap: 'arcgis-dark-gray' },
  mapViewOption: {}
}

const MapViewer = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const [popupPoint, setPopupPoint] = useState<Point>()
  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    (async () => {
      const map = await asyncMap
      const view = await asyncMapView
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


      view.watch("stationary", function (isStationary) {
        if (!isStationary) {
          console.log(view.zoom)
        }
      });

    })()
  }, [])

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
