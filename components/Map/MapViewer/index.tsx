import React, { useRef, useEffect, useState } from 'react'
import style from './index.module.scss'
import '@arcgis/core/assets/esri/themes/light/main.css'
import useMap from '../../../hooks/useMap'
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol"
import Point from "@arcgis/core/geometry/Point"
// import MapPopup from '../../MapPopup'
// import DefaultTemplate from '../../MapPopup/DefaultTemplate'

const geoJsonLayerRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 12,
    color: '#009be5',
    outline: new SimpleLineSymbol({
      width: 1,
      color: 'black'
    })
  })
})

const mapOptions = {
  mapOption: {},
  mapViewOption: {}
}

// interface IGeojsonMapViewer {
//   geojson: ResourceApiGeojson['ResponseType']
// }

const MapViewer = (
  // {
  // geojson
  // }: IGeojsonMapViewer
) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { asyncMap, asyncMapView } = useMap(mapRef, mapOptions)
  const [popupPoint, setPopupPoint] = useState<Point>()
  const [openPopup, setOpenPopup] = useState(false)
  const [geojsonLayer, setgeojsonLayer] = useState<GeoJSONLayer | undefined>(undefined)

  // const handleViewClick = async (event: any) => {
  //   const opts = {
  //     include: geojsonLayer
  //   }
  //   const view = await asyncMapView
  //   view.hitTest(event, opts).then((response) => {
  //     if (response.results.length === 0) {
  //       setPopupPoint(undefined)
  //       setOpenPopup(false)
  //       return
  //     }
  //     if (openPopup) return
  //     const graphic = response.results[0].graphic

  //     const jsonObj = JSON.parse(geojson.content)
  //     const feature = jsonObj.features[graphic.attributes.__OBJECTID - 1]
  //     console.log(feature)
  //     setPopupPoint(new Point(graphic.geometry))
  //     setOpenPopup(true)
  //   })
  // }

  // const handleGeoJsonLoad = async () => {
  //   (await asyncMap).removeAll()
  //   const blob = new Blob([geojson.content], {
  //     type: "application/json"
  //   })
  //   const url = URL.createObjectURL(blob)
  //   const layer = new GeoJSONLayer({
  //     url: url,
  //     renderer: geoJsonLayerRenderer
  //   });
  //   setgeojsonLayer(layer);
  //   (await asyncMap).add(layer);
  //   const extentResponse = await layer.queryExtent();
  //   (await asyncMapView).goTo(extentResponse.extent);
  // }

  // useEffect(() => {
  //   (async () => {
  //     const view = await asyncMapView
  //     await handleGeoJsonLoad()
  //     view.on('click', handleViewClick)
  //   })()
  // }, [geojson])


  return (
    <>
      <div className={style.MapViewer} ref={mapRef}></div>
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

export default MapViewer
