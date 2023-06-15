"use client"
import QueryContext from './QueryContext'
import Filter from '@/components/Filter'
import style from './index.module.scss'
import dynamic from 'next/dynamic'
import theme from '@/app/theme'
import { useSpatialQueryMutation } from '@/store/services/apr'
import { ThemeProvider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import QueryAlert from '@/components/QueryAlert'
import { onResultAprChange } from '@/store/slice/apr'

const MapViewer = dynamic(
  () => import('../../components/Map/MapViewer'),
  { ssr: false }
)

const QueryContainer = () => {
  const [geojson, setgeojson] = useState<string | undefined>(undefined)
  const [longitude, setlongitude] = useState<number | undefined>(undefined)
  const [latitude, setlatitude] = useState<number | undefined>(undefined)
  const [bufferRadius, setbufferRadius] = useState<number>(500)
  const [isPickerActive, setisPickerActive] = useState<boolean>(false)
  const [dateStart, setdateStart] = useState<string>('2018-01-09')
  const [dateEnd, setdateEnd] = useState<string>('2018-01-17')
  const [triggerQuery, { isLoading, isSuccess, isError, data
  }] = useSpatialQueryMutation()
  const [alertOpen, setalertOpen] = useState<boolean>(false)
  const [alertMsg, setalertMsg] = useState<string>('')
  const dispatch = useDispatch()


  const handleQueryClick = async () => {
    if (!geojson) {
      setalertOpen(true)
      setalertMsg('please specify a spatial extent')
      return
    }
    const response = await triggerQuery({
      geojson, transactionTimeStart: dateStart, transactionTimeEnd: dateEnd
    })
    if ('error' in response) {
      setalertOpen(true)
      setalertMsg('request failed, contact developers')
      return
    }
    if (response.data.length === 0) {
      setalertOpen(true)
      setalertMsg('no records found, perhapse setting wider range will help.')
      return
    }
    dispatch(onResultAprChange(response.data))

  }

  return (
    <ThemeProvider theme={theme}>
      <QueryContext.Provider value={{
        isPickerActive, latitude, longitude, bufferRadius,
        dateStart, dateEnd, geojson, alertOpen, alertMsg,
        onPickerClick: () => { setisPickerActive(prev => !prev) },
        onMapPick: (longitude, latitude) => {
          setlongitude(longitude)
          setlatitude(latitude)
          setisPickerActive(false)
        },
        onBufferChange: (value) => { setbufferRadius(value) },
        onGeojsonChange: (value) => { setgeojson(value) },
        onDateRangeChange: (start, end) => { setdateStart(start); setdateEnd(end) },
        onQueryClick: handleQueryClick,
        onAlert: (msg, open) => { setalertOpen(open); setalertMsg(msg); }
      }}>
        <main className={style.QueryContainer}>
          <div className={style.FilterContainer}>
            <QueryAlert />
            <Filter />
          </div>
          <div className={style.MapContainer}>
            <MapViewer />
          </div>
        </main>
      </QueryContext.Provider>
    </ThemeProvider>
  )

}

export default QueryContainer
