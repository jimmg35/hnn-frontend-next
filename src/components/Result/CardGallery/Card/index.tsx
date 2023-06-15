import { useContext } from 'react'
import style from './index.module.scss'
import ResultContext from '@/containers/ResultContainer/ResultContext'
import { SpatialQueryResponse } from '@/store/services/types/apr'
import classNames from 'classnames'
import { useGetByIdQuery } from '@/store/services/apr'
import { CircularProgress } from '@mui/material'

const LoadingScreen = () => {
  return (
    <div className={style.Loading}>
      <CircularProgress style={{ width: '30px', height: '30px' }} />
    </div>
  )
}

const Card = (apr: SpatialQueryResponse) => {
  const { data, error, isLoading } = useGetByIdQuery({ id: apr.id })
  const { selectedApr, onHover, onSelect } = useContext(ResultContext)

  return (
    <div className={classNames({
      [style.Card]: true,
      [style.active]: selectedApr.some((item) => item.id === apr.id)
    })}
      onMouseEnter={() => { onHover(apr) }}
      onMouseLeave={() => { onHover(undefined) }}
      onClick={() => { onSelect(apr) }}
    >
      <LoadingScreen />
    </div>
  )
}

export default Card
