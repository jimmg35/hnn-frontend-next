import { SpatialQuery } from "@/store/services/types/apr"


export interface IAprConfig {
  resultApr: SpatialQuery['ResponseType']
}

export interface ITestConfig {
  collapseFixed: boolean
}

export default interface IRootConfig {
  test: ITestConfig
  apr: IAprConfig
}
