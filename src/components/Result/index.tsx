import { Divider } from '@mui/material'
import style from './index.module.scss'
import FilterAction from '../Filter/FilterAction'
import CardGallery from './CardGallery'
import CardPagination from './CardPagination'
import { useSelector } from 'react-redux'
import { selectApr } from '@/store/slice/apr'
import { useEffect, useState } from 'react'
import { SpatialQueryResponse } from '@/store/services/types/apr'

const Result = () => {
  const { resultApr } = useSelector(selectApr)
  const [itemsPerPage, setitemsPerPage] = useState<number>(4)
  const [currentPage, setcurrentPage] = useState<number>(1)
  const [aprSlice, setaprSlice] = useState<SpatialQueryResponse[]>([])

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

  useEffect(() => {
    const slice = sliceAprArray(currentPage)
    setaprSlice(slice)
  }, [])

  return (
    <div className={style.Result}>

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
