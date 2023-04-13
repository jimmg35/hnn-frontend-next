import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import userReducer from './slice/user'

const combinedReducer = combineReducers({
  user: userReducer
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  ]
})

export const persistor = persistStore(store)

export default store
