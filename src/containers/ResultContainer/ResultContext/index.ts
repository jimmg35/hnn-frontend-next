import { SpatialQueryResponse } from '@/store/services/types/apr'
import { createContext } from 'react'

export interface IResultContext {
  selectedApr: SpatialQueryResponse[]
  hoverApr: SpatialQueryResponse | undefined
  onHover: (apr: SpatialQueryResponse | undefined) => void
  onSelect: (apr: SpatialQueryResponse) => void
}

const ResultContext = createContext<IResultContext>({
  selectedApr: [],
  hoverApr: undefined,
  onHover: () => { },
  onSelect: () => { }
})

export default ResultContext
