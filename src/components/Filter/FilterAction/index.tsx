import { Button } from '@mui/material'
import style from './index.module.scss'


const FilterAction = () => {
  return (
    <div className={style.FilterAction}>
      <Button variant='outlined' color='primary'
        sx={{ bgcolor: '#353738 !important' }} fullWidth
      >Search</Button>
    </div>
  )
}

export default FilterAction
