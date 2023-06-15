import { SpatialQueryResponse } from '@/store/services/types/apr'
import Card from './Card'
import style from './index.module.scss'

interface ICardGallery {
  slice: SpatialQueryResponse[]
}

const CardGallery = ({
  slice
}: ICardGallery) => {

  return (
    <div className={style.CardGallery}>
      {
        slice.map((apr) => <Card />)
      }
    </div>
  )
}

export default CardGallery
