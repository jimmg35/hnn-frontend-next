import { useContext } from 'react'
import style from './index.module.scss'
import ResultContext from '@/containers/ResultContainer/ResultContext'
import { SpatialQueryResponse } from '@/store/services/types/apr'
import classNames from 'classnames'
import { useGetByIdQuery } from '@/store/services/apr'
import { Checkbox, CircularProgress, Tooltip } from '@mui/material'
import Image from 'next/image'


const LoadingScreen = () => {
  return (
    <div className={style.Loading}>
      <CircularProgress style={{ width: '30px', height: '30px' }} />
    </div>
  )
}

const ShortenUnitPrice = (value: number) => {
  return (value / 1000).toFixed(2)
}

const Card = (apr: SpatialQueryResponse) => {
  const { data } = useGetByIdQuery({ id: apr.id })
  const { selectedApr, onHover, onSelect } = useContext(ResultContext)
  const isSelected = selectedApr.some((item) => item.id === apr.id)

  return (
    <div className={classNames({
      [style.Card]: true,
      [style.active]: isSelected
    })}
      onMouseEnter={() => { onHover(apr) }}
      onMouseLeave={() => { onHover(undefined) }}
      onClick={() => { onSelect(apr) }}
    >
      {
        data ?
          <div className={style.Info}>
            <div className={style.Check}>
              <Checkbox checked={isSelected} />
            </div>

            <div className={style.Desc}>
              <p className={style.Id}>{apr.id}</p>
              <p className={style.Address}>{data.address}</p>

              <div className={style.Content}>

                <div className={style.Area}>
                  <div className={style.AreaCell}>
                    <p>house size</p>
                    <span>{data.buildingtransferarea}</span>
                    <p>m²</p>
                  </div>
                  <div className={style.AreaCell}>
                    <p>land size</p>
                    <span>{data.landtransferarea}</span>
                    <p>m²</p>
                  </div>
                </div>

                <div className={style.Piped}>
                  <div className={style.PipedCell}>
                    <Image src='/bed.png' width={20} height={20} alt='bed' />
                    <p>{data.roomnumber}</p>
                  </div>
                  <div className={style.PipedCell}>
                    <Image src='/bathtub.png' width={20} height={20} alt='bed' />
                    <p>{data.bathnumber}</p>
                  </div>
                  <div className={style.PipedCell}>
                    <Image src='/garage.png' width={20} height={20} alt='bed' />
                    <p>{data.parkamount}</p>
                  </div>
                </div>



              </div>

            </div>

            <Tooltip title='price per square foot (TWD)'>
              <div className={style.Price}>
                <div className={style.priceContainer}>
                  {ShortenUnitPrice(data.unitprice)}
                  <p className={style.unit}>K</p>
                </div>
              </div>
            </Tooltip>
          </div>
          : <LoadingScreen />
      }
    </div>
  )
}

export default Card
