import { Divider } from '@mui/material'
import style from './index.module.scss'
import FilterAction from '../Filter/FilterAction'
import CardGallery from './CardGallery'
import CardPagination from './CardPagination'

const Result = () => {
  return (
    <div className={style.Result}>

      <div className={style.CardContainer}>
        <CardGallery />
      </div>
      <Divider />
      <div className={style.Action}>
        <CardPagination />
      </div>
    </div>
  )
}

export default Result
