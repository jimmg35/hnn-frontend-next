import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from '../config'
import { IAprConfig } from './interface'
import { SpatialQuery } from '../services/types/apr'

const init = {
  resultApr: []
} as IAprConfig

export const aprSlice = createSlice({
  name: 'apr',
  initialState: init,
  reducers: {
    onResultAprChange: (state: IAprConfig, action: { type: string; payload: SpatialQuery['ResponseType'] }) => {
      state.resultApr = action.payload
    }
  },
})

export const selectApr = (state: any) => {
  return state.apr as IAprConfig
}

export const {
  onResultAprChange,
} = aprSlice.actions

const aprReducer = persistReducer<IAprConfig>(persistConfig, aprSlice.reducer)

export default aprReducer
