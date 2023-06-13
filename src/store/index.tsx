import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { aprApi } from './services/apr'

const combinedReducer = combineReducers({
  [aprApi.reducerPath]: aprApi.reducer
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aprApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
