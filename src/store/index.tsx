import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { aprApi } from './services/apr'
import { persistStore, persistReducer } from 'redux-persist'

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
