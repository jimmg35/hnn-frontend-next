"use client"
import Filter from '@/components/Filter'
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import theme from '@/app/theme'
import { useSpatialQueryMutation } from '@/store/services/apr'
import { ThemeProvider } from '@mui/material'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import QueryAlert from '@/components/QueryAlert'
import { onResultAprChange } from '@/store/slice/apr'
import { useRouter } from 'next/navigation'

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const PredictContainer = () => {

  return (
    <ThemeProvider theme={theme}>
      <main className={style.PredictContainer}>
        <div className={style.FilterContainer}>
          {/* <QueryAlert />
          <Filter /> */}
        </div>
        <div className={style.MapContainer}>
          {/* <MapViewer /> */}
        </div>
      </main>
    </ThemeProvider>
  )

}

export default PredictContainer
