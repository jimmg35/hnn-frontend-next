import MapViewer from '../components/Map/MapViewer'
import style from './index.module.scss'

const HomeContainer = () => {
  return (
    <div className={style.HomeContainer}>
      <MapViewer />
      {/* <p>asdsad</p> */}
    </div>
  )
}

export default HomeContainer
