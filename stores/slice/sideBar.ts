import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { persistConfig } from '../config'

export type PageType =
  | ''
  | 'setting'
  | 'layer'
  | 'backup'
  | 'user'

export interface ISideBarConfig {
  toggled: boolean
  page: PageType
}

const init = {
  toggled: false,
  page: '',
} as ISideBarConfig

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState: init,
  reducers: {
    onToggle: (state: ISideBarConfig, action: { type: string; payload: boolean }) => {
      state.toggled = action.payload
    },
    onPageChange: (state: ISideBarConfig, action: { type: string; payload: PageType }) => {
      state.page = action.payload
    },
  },
})

export const selectSideBarConfig = (state: any) => {
  return state.sideBar as ISideBarConfig
}

export const { onToggle, onPageChange } = sideBarSlice.actions

const sideBarReducer = persistReducer<ISideBarConfig>(persistConfig, sideBarSlice.reducer)

export default sideBarReducer
