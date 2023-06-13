"use client";
import Filter from '@/components/Filter';
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@mui/material';
import theme from '@/app/theme';
import { useContext, useState } from 'react';
import QueryContext from './QueryContext';

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const QueryContainer = () => {
  const [longitude, setlongitude] = useState<number | undefined>(undefined)
  const [latitude, setlatitude] = useState<number | undefined>(undefined)
  const [bufferRadius, setbufferRadius] = useState<number>(300)
  const [isPickerActive, setisPickerActive] = useState<boolean>(false)

  return (
    <ThemeProvider theme={theme}>
      <QueryContext.Provider value={{
        isPickerActive, latitude, longitude, bufferRadius,
        onPickerClick: () => { setisPickerActive(prev => !prev) },
        onMapPick: (longitude, latitude) => {
          setlongitude(longitude)
          setlatitude(latitude)
          setisPickerActive(false)
        },
        onBufferChange: (value) => { setbufferRadius(value) }
      }}>
        <main className={style.QueryContainer}>
          <div className={style.FilterContainer}>
            <Filter />
          </div>
          <div className={style.MapContainer}>
            <MapViewer />
          </div>
        </main>
      </QueryContext.Provider>
    </ThemeProvider>
  )

}

export default QueryContainer
