import Card from './Card'
import style from './index.module.scss'

const CardGallery = () => {

  return (
    <div className={style.CardGallery}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardGallery
