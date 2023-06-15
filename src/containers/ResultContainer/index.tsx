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
import Result from '@/components/Result'
import ResultContext from './ResultContext'
import { SpatialQueryResponse } from '@/store/services/types/apr'

const MapViewer = dynamic(
  () => import('../../components/Map/ResultMapViewer'),
  { ssr: false }
)

const ResultContainer = () => {
  const [selectedApr, setselectedApr] = useState<SpatialQueryResponse[]>([])
  const [hoverApr, sethoverApr] = useState<SpatialQueryResponse | undefined>(undefined)

  const handleHover = (apr: SpatialQueryResponse | undefined) => {
    sethoverApr(apr)
  }

  const handleSelect = (apr: SpatialQueryResponse) => {

  }

  const ResultProvider = (children: React.ReactNode) => {
    return (
      <ResultContext.Provider value={{
        selectedApr, hoverApr,
        onHover: handleHover, onSelect: handleSelect
      }}>
        {children}
      </ResultContext.Provider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      {ResultProvider(
        <main className={style.ResultContainer}>
          <div className={style.MapContainer}>
            <MapViewer />
          </div>
          <div className={style.CardContainer}>
            <Result />
          </div>
        </main>
      )}
    </ThemeProvider>
  )

}

export default ResultContainer
