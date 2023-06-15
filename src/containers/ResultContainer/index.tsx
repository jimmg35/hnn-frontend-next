"use client"
import Filter from '@/components/Filter'
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import theme from '@/app/theme'
import { useSpatialQueryMutation } from '@/store/services/apr'
import { ThemeProvider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import QueryAlert from '@/components/QueryAlert'
import { onResultAprChange } from '@/store/slice/apr'

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const ResultContainer = () => {

  return (
    <ThemeProvider theme={theme}>
      <main className={style.QueryContainer}>
        <div className={style.FilterContainer}>
          <MapViewer />
        </div>
        <div className={style.MapContainer}>
        </div>
      </main>
    </ThemeProvider>
  )

}

export default ResultContainer
