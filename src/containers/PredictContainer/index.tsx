"use client"
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import theme from '@/app/theme'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import PredictContext from './PredictContext'
import PredictResult from '@/components/PredictResult'
import Stats from '@/components/Stats'

const PredictMapViewer = dynamic(
  () => import('../../components/Map/PredictMapViewer'),
  { ssr: false }
)

const PredictContainer = () => {

  const PredictProvider = (children: React.ReactNode) => {
    return (
      <PredictContext.Provider value={{
      }}>
        {children}
      </PredictContext.Provider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      {PredictProvider(<main className={style.PredictContainer}>
        <div className={style.FilterContainer}>
          <PredictResult />
        </div>
        <div className={style.MapContainer}>
          <Stats />
          <PredictMapViewer />
        </div>
      </main>)}
    </ThemeProvider>
  )

}

export default PredictContainer
