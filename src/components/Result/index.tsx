import { Divider, Button } from '@mui/material'
import style from './index.module.scss'
import FilterAction from '../Filter/FilterAction'
import CardGallery from './CardGallery'
import CardPagination from './CardPagination'
import { useSelector } from 'react-redux'
import { selectApr } from '@/store/slice/apr'
import { useContext, useEffect, useState } from 'react'
import { SpatialQueryResponse } from '@/store/services/types/apr'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import classNames from 'classnames'
import ResultContext from '@/containers/ResultContainer/ResultContext'

import LoadingButton from '@mui/lab/LoadingButton'
import CircularStatic from '../CircularStatic'

const Result = () => {
  const { resultApr } = useSelector(selectApr)
  const [itemsPerPage, setitemsPerPage] = useState<number>(4)
  const [currentPage, setcurrentPage] = useState<number>(1)
  const [aprSlice, setaprSlice] = useState<SpatialQueryResponse[]>([])
  const { selectedApr } = useContext(ResultContext)
  const [isPredictClicked, setisPredictClicked] = useState<boolean>(false)
  const isActive = selectedApr.length !== 0

  const sliceAprArray = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage
    const currentPageItems = resultApr.slice(startIndex, startIndex + itemsPerPage)
    return currentPageItems
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const slice = sliceAprArray(page)
    setcurrentPage(page)
    setaprSlice(slice)
  }

  const handlePredict = () => {
    setisPredictClicked(true)
  }

  useEffect(() => {
    const slice = sliceAprArray(currentPage)
    setaprSlice(slice)
  }, [])

  return (
    <div className={style.Result}>

      <div className={classNames({
        [style.Title]: true,
        [style.active]: isActive,
      })}>
        <div className={style.Text}><p>Select targets to predict</p></div>
        {isActive && <div className={style.Action}>
          {
            isPredictClicked
              ? <CircularStatic />
              : <Button
                variant='outlined'
                color='info'
                startIcon={<AnalyticsIcon />}
                onClick={handlePredict}
              >Predict</Button>
          }
        </div>
        }
      </div>

      <Divider />

      <div className={style.CardContainer}>
        <CardGallery slice={aprSlice} />
      </div>

      <Divider />

      <div className={style.Action}>
        <CardPagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Result
