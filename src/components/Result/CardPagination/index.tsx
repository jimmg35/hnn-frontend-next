import { useSelector } from 'react-redux'
import style from './index.module.scss'
import Pagination from '@mui/material/Pagination'
import { selectApr } from '@/store/slice/apr'

interface ICardPagination {
  itemsPerPage: number
  currentPage: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const CardPagination = ({
  currentPage, itemsPerPage, onChange
}: ICardPagination) => {
  const { resultApr } = useSelector(selectApr)
  return (
    <div className={style.CardPagination}>
      <Pagination
        count={Math.ceil(resultApr.length / itemsPerPage)}
        color='secondary'
        variant="outlined"
        size='small'
        defaultPage={currentPage}
        onChange={onChange}
      />
    </div>
  )
}

export default CardPagination
