import { useContext } from 'react'
import style from './index.module.scss'
import ResultContext from '@/containers/ResultContainer/ResultContext'
import { SpatialQueryResponse } from '@/store/services/types/apr'

const Card = (apr: SpatialQueryResponse) => {
  const { onHover } = useContext(ResultContext)

  return (
    <div className={style.Card}
      onMouseEnter={() => { onHover(apr) }}
      onMouseLeave={() => { onHover(undefined) }}
    >

    </div>
  )
}

export default Card
