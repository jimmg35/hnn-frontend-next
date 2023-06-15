import { Button } from '@mui/material'
import style from './index.module.scss'
import QueryContext from '@/containers/QueryContainer/QueryContext'
import { useContext } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'

const FilterAction = () => {
  const { isQurying, onQueryClick } = useContext(QueryContext)
  return (
    <div className={style.FilterAction}>
      {/* <Button variant='outlined' color='primary'
        sx={{ bgcolor: '#353738 !important' }} fullWidth
        onClick={onQueryClick}
      >Search</Button> */}

      <LoadingButton
        color='secondary'
        onClick={onQueryClick}
        loading={isQurying}
        loadingPosition="start"
        startIcon={<SavedSearchIcon />}
        variant="outlined" fullWidth
      >
        <span>Search</span>
      </LoadingButton>

    </div>
  )
}

export default FilterAction
