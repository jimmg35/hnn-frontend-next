import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { persistConfig } from '../config'

export interface IRole {
  id: number
  roleName: string
}

export interface IUserProfile {
  id: string
  alias: string | null
  email: string
  lastLoginAt: string | null
  iat: number
  exp: number
}

export interface IUserInfo {
  token: string | undefined
  userProfile: IUserProfile | undefined
}

const init = {
  token: undefined,
  userProfile: undefined
} as IUserInfo

export const userSlice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    setUserToken: (state: IUserInfo, action: { type: string, payload: string | undefined }) => {
      state.token = action.payload
    },
    setUserProfile: (state: IUserInfo, action: { type: string, payload: IUserProfile | undefined }) => {
      state.userProfile = action.payload
    }
  }
})

export const selectUser = (state: any) => {
  return state.user as IUserInfo
}

export const {
  setUserToken,
  setUserProfile
} = userSlice.actions

const userReducer = persistReducer<IUserInfo>(persistConfig, userSlice.reducer)

export default userReducer
