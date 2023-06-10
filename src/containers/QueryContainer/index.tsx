"use client";
import Filter from '@/components/Filter';
import style from './index.module.scss'
import dynamic from 'next/dynamic'

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const QueryContainer = () => {
  return (
    <main className={style.QueryContainer}>

      <div className={style.FilterContainer}>
        <Filter />
      </div>

      <div className={style.MapContainer}>
        <MapViewer />
      </div>
    </main>
  )

}

export default QueryContainer
