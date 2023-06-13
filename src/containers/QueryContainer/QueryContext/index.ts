import { createContext } from 'react'

export interface IQueryContext {
  longitude: number | undefined
  latitude: number | undefined
  bufferRadius: number
  isPickerActive: boolean
  onPickerClick: () => void
  onMapPick: (longitude: number, latitude: number) => void
  onBufferChange: (value: number) => void
}

const QueryContext = createContext<IQueryContext>({
  longitude: undefined,
  latitude: undefined,
  isPickerActive: false,
  bufferRadius: 300,
  onPickerClick: () => { },
  onMapPick: () => { },
  onBufferChange: () => { }
})

export default QueryContext
