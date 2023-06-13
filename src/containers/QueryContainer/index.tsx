"use client";
import Filter from '@/components/Filter';
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@mui/material';
import theme from '@/app/theme';

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const QueryContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className={style.QueryContainer}>

        <div className={style.FilterContainer}>
          <Filter />
        </div>

        <div className={style.MapContainer}>
          <MapViewer />
        </div>

      </main>

    </ThemeProvider>
  )

}

export default QueryContainer
