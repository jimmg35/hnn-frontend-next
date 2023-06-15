import { createContext } from 'react'

export interface IQueryContext {
  longitude: number | undefined
  latitude: number | undefined
  bufferRadius: number
  isPickerActive: boolean
  geojson: string | undefined
  dateStart: string
  dateEnd: string
  alertOpen: boolean
  alertMsg: string
  isQurying: boolean
  onAlert: (msg: string, open: boolean) => void
  onPickerClick: () => void
  onMapPick: (longitude: number, latitude: number) => void
  onBufferChange: (value: number) => void
  onGeojsonChange: (geojson: string) => void
  onDateRangeChange: (start: string, end: string) => void
  onQueryClick: () => void
}

const QueryContext = createContext<IQueryContext>({
  longitude: undefined,
  latitude: undefined,
  isPickerActive: false,
  bufferRadius: 300,
  geojson: undefined,
  dateStart: '2018-01-01',
  dateEnd: '2018-01-31',
  alertOpen: false,
  alertMsg: '',
  isQurying: false,
  onAlert: () => { },
  onPickerClick: () => { },
  onMapPick: () => { },
  onBufferChange: () => { },
  onGeojsonChange: () => { },
  onDateRangeChange: () => { },
  onQueryClick: () => { }
})

export default QueryContext
