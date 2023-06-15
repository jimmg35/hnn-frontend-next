import { useContext } from 'react'
import style from './index.module.scss'
import ResultContext from '@/containers/ResultContainer/ResultContext'
import { SpatialQueryResponse } from '@/store/services/types/apr'
import classNames from 'classnames'

const Card = (apr: SpatialQueryResponse) => {
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

    </div>
  )
}

export default Card
