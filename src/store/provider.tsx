"use client";

import store, { persistor } from "./index"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

export function Providers ({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

export function Persist ({ children }: { children: React.ReactNode }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>
}
