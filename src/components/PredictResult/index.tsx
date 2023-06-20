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

const PredictResult = () => {
  const { predictApr } = useSelector(selectApr)
  const [itemsPerPage] = useState<number>(4)
  const [currentPage, setcurrentPage] = useState<number>(1)
  const [aprSlice, setaprSlice] = useState<SpatialQueryResponse[]>([])
  const [isPredictClicked, setisPredictClicked] = useState<boolean>(false)

  const sliceAprArray = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage
    const currentPageItems = predictApr.slice(startIndex, startIndex + itemsPerPage)
    return currentPageItems
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const slice = sliceAprArray(page)
    setcurrentPage(page)
    setaprSlice(slice)
  }

  useEffect(() => {
    const slice = sliceAprArray(currentPage)
    setaprSlice(slice)
  }, [])

  return (
    <div className={style.Result}>

      <div className={classNames({
        [style.Title]: true
      })}>
        <div className={style.Text}>
          <p>{'Prediction results'}</p>
        </div>
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

export default PredictResult
