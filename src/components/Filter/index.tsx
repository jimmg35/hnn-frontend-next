import { Button, Divider } from '@mui/material'
import style from './index.module.scss'
import AttributeFilter from './AttributeFilter'
import CoordinatePicker from './CoordinatePicker'
import FilterAction from './FilterAction'

const Filter = () => {
  return (
    <div className={style.Filter}>

      <div className={style.CoordinatePicker}>
        <CoordinatePicker />
      </div>
      <Divider />
      <div className={style.AttributeFilter}>
        <AttributeFilter />
      </div>
      <Divider />
      <div className={style.Action}>
        <FilterAction />
      </div>

    </div>
  )
}

export default Filter
