
import { DateRange, RangeKeyDict } from 'react-date-range'
import style from './index.module.scss'
import './DateRangeCss/styles.css'
import './DateRangeCss/default.css'
import QueryContext from '@/containers/QueryContainer/QueryContext'
import { useContext } from 'react'
import moment from 'moment'

const AttributeFilter = () => {
  const {
    dateStart, dateEnd, onDateRangeChange
  } = useContext(QueryContext)

  const selectionRange = {
    startDate: new Date(dateStart),
    endDate: new Date(dateEnd),
    key: 'selection',
  }

  const handleDateChange = (range: RangeKeyDict) => {
    const start = moment(range.selection.startDate)
    const end = moment(range.selection.endDate)
    const startString = start.format('YYYY-MM-DD')
    const endString = end.format('YYYY-MM-DD')
    onDateRangeChange(startString, endString)
  }

  return (
    <div className={style.AttributeFilter}>

      <div className={style.FieldSet}>
        <DateRange
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          ranges={[selectionRange]}
          onChange={handleDateChange}
        />
      </div>

    </div>
  )
}

export default AttributeFilter
