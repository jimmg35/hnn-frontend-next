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
  const { selectedApr } = useContext(ResultContext)
  const [itemsPerPage] = useState<number>(4)
  const [currentPage, setcurrentPage] = useState<number>(1)
  const [aprSlice, setaprSlice] = useState<SpatialQueryResponse[]>([])
  const [isPredictClicked, setisPredictClicked] = useState<boolean>(false)
  const isActive = selectedApr.length !== 0

  const sliceAprArray = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage
    const currentPageItems = resultApr.slice(startIndex, startIndex + itemsPerPage)
    return currentPageItems
  }\

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
        <div className={style.Text}>
          <p>{'Predictions of neural networks'}</p>
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

export default Result
