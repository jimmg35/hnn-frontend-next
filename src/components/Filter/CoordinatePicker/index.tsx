import Icon from '@/components/Icon'
import style from './index.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import { Divider, TextField, Typography } from '@mui/material'

interface CoordinatePicker {
  longitude: number
  latitude: number
}

const CoordinatePicker = ({
  longitude,
  latitude
}: CoordinatePicker) => {
  return (
    <div className={style.CoordinatePicker}>
      <div className={style.Icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      </div>

      <div className={style.Detail}>
        <div>
          <p>{longitude}°S</p>
        </div>
        <div>
          <p>{latitude}°N</p>
        </div>
      </div>

      <TextField size='small' type='number' minRows={30}
        maxRows={2000}
        value={300}
        sx={{ bgcolor: '#242627' }}
      />
    </div>
  )
}

export default CoordinatePicker
