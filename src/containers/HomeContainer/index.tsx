"use client";
import style from './index.module.scss'
import dynamic from 'next/dynamic'

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const HomeContainer = () => {
  return (
    <main className={style.HomeContainer}>
      <MapViewer />
    </main>
  )

}

export default HomeContainer
