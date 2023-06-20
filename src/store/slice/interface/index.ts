import { GetByIdQuery, SpatialQuery } from "@/store/services/types/apr"


export interface IAprConfig {
  resultApr: SpatialQuery['ResponseType']
  predictApr: SpatialQuery['ResponseType']
}

export interface ITestConfig {
  collapseFixed: boolean
}

export default interface IRootConfig {
  test: ITestConfig
  apr: IAprConfig
}
