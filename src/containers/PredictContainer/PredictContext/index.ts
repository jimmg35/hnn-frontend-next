import { SpatialQueryResponse } from '@/store/services/types/apr'
import { createContext } from 'react'

export interface IPredictContext {
}

const PredictContext = createContext<IPredictContext>({
})

export default PredictContext
