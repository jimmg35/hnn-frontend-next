import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from '../config'
import { IAprConfig } from './interface'
import { GetByIdQuery, SpatialQuery } from '../services/types/apr'

const init = {
  resultApr: [],
  predictApr: []
} as IAprConfig

export const aprSlice = createSlice({
  name: 'apr',
  initialState: init,
  reducers: {
    onResultAprChange: (state: IAprConfig, action: { type: string; payload: SpatialQuery['ResponseType'] }) => {
      state.resultApr = action.payload
    },
    onPredictAprChange: (state: IAprConfig, action: { type: string; payload: GetByIdQuery['ResponseType'][] }) => {
      state.predictApr = action.payload
    }
  },
})

export const selectApr = (state: any) => {
  return state.apr as IAprConfig
}

export const {
  onResultAprChange,
  onPredictAprChange
} = aprSlice.actions

const aprReducer = persistReducer<IAprConfig>(persistConfig, aprSlice.reducer)

export default aprReducer
