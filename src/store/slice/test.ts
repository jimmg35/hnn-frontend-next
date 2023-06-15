import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from '../config'
import { ITestConfig } from './interface'

const init = {
  collapseFixed: true
} as ITestConfig

export const testSlice = createSlice({
  name: 'sideBar',
  initialState: init,
  reducers: {
    onCollapseFixed: (state: ITestConfig, action: { type: string; payload: boolean }) => {
      state.collapseFixed = action.payload
    }
  },
})

export const selectTestConfig = (state: any) => {
  return state.sideBar as ITestConfig
}

export const {
  onCollapseFixed,
} = testSlice.actions

const testReducer = persistReducer<ITestConfig>(persistConfig, testSlice.reducer)

export default testReducer
