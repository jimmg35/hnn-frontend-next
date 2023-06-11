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


const AttributeFilter = () => {
  return (
    <div className={style.AttributeFilter}>

      <div className={style.FieldSet}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
          <MobileDatePicker defaultValue={dayjs('2022-04-29')} />
        </LocalizationProvider>
      </div>

    </div>
  )
}

export default AttributeFilter
