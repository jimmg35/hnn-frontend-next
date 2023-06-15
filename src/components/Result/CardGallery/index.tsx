import { SpatialQueryResponse } from '@/store/services/types/apr'
import Card from './Card'
import style from './index.module.scss'

interface ICardGallery {
  slice: SpatialQueryResponse[]
}

const NoRecord = () => {
  return (
    <p>No records to show</p>
  )
}

const CardGallery = ({
  slice
}: ICardGallery) => {

  return (
    <div className={style.CardGallery}>
      {
        slice.map((apr, index) => <Card key={index} {...apr} />)
      }
      {slice.length === 0 && <NoRecord />}
    </div>
  )
}

export default CardGallery
