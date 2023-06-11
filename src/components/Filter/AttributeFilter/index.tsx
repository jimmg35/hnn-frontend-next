import { Checkbox, TextField } from '@mui/material'
import style from './index.module.scss'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker'
// import mobiledater
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import './DateRangeCss/styles.css'
import './DateRangeCss/default.css'

const AttributeFilter = () => {

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <div className={style.AttributeFilter}>

      <div className={style.FieldSet}>
        <DateRange
          moveRangeOnFirstSelection={false}
          editableDateInputs={true}
          ranges={[selectionRange]}
          onChange={() => { }}
        />
      </div>

    </div>
  )
}

export default AttributeFilter
