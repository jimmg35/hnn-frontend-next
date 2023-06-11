import Icon from '@/components/Icon'
import style from './index.module.scss'
import classNames from 'classnames'
import Image from 'next/image'

interface CoordinatePicker {
  longitude: number
  latitude: number
}

const CoordinatePicker = ({
  longitude,
  latitude
}: CoordinatePicker) => {
  return (
    <div className={style.CoordinatePicker}>

      <div className={classNames({
        [style.coordinateSelector]: true
      })}
      >
        <div className={style.titleContainer}>

          {/* <Icon name='/map-pin' width={40} height={40} color='#44d62c' /> */}

          {/* <Image src='/map-pin.svg' width={40} height={40} alt='' /> */}

          {/* <Image src={enabled ? '/aprRegion/gps.png' : '/aprRegion/gps-disabled.png'} width='25px' height='25px' /> */}
          {/* <div>
            <p>
              {
                longitude === undefined || latitude === undefined
                  ? '請定位座標'
                  : `Lon: ${Math.round(longitude * 1000) / 1000}`
              }
            </p>
            <p>
              {
                longitude === undefined || latitude === undefined
                  ? ''
                  : `Lat: ${Math.round(latitude * 1000) / 1000}`
              }
            </p>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default CoordinatePicker
