import { useSelector } from 'react-redux'
import style from './index.module.scss'
import Pagination from '@mui/material/Pagination'
import { selectApr } from '@/store/slice/apr'

const CardPagination = () => {
  const { resultApr } = useSelector(selectApr)
  return (
    <div className={style.CardPagination}>
      <Pagination
        count={Math.ceil(resultApr.length / 4)}
        color='secondary'
        variant="outlined"
        size='large'
      />
    </div>
  )
}

export default CardPagination
