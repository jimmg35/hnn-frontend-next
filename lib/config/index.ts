import getConfig from 'next/config'
import { capitalizeFirstLetter } from '../util/capitalizeFirstLetter'

const { publicRuntimeConfig } = getConfig()

export const project_name: string = capitalizeFirstLetter(publicRuntimeConfig.project_name)
export const firm_name: string = publicRuntimeConfig.firm_name
export const version: string = publicRuntimeConfig.version
export const basePath: string = publicRuntimeConfig.basePath
export const layerListPerPage: number = publicRuntimeConfig.layerListPerPage
export const backupListPerPage: number = publicRuntimeConfig.backupListPerPage
