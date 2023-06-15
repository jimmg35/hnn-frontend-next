import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { aprApi } from './services/apr'
import testReducer from './slice/sideBar'


const combinedReducer = combineReducers({
  test: testReducer,
  [aprApi.reducerPath]: aprApi.reducer
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      [aprApi.middleware]
    )
})

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
