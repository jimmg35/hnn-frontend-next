import { Button } from '@mui/material'
import style from './index.module.scss'
import QueryContext from '@/containers/QueryContainer/QueryContext'
import { useContext } from 'react'

const FilterAction = () => {
  const { onQueryClick } = useContext(QueryContext)
  return (
    <div className={style.FilterAction}>
      <Button variant='outlined' color='primary'
        sx={{ bgcolor: '#353738 !important' }} fullWidth
        onClick={onQueryClick}
      >Search</Button>
    </div>
  )
}

export default FilterAction
