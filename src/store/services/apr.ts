import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetAssetDetailByAprId, ListByExtent, SpatialQuery } from './types/apr'

export const aprApi = createApi({
  reducerPath: 'aprApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/apr/`,
  }),
  endpoints: (builder) => ({

    listByExtent: builder.query<
      ListByExtent['ResponseType'],
      ListByExtent['ParamType']
    >({
      query: (param) => ({
        url: `listByExtent`,
        method: 'get',
      }),
    }),

    spatialQuery: builder.mutation<
      SpatialQuery['ResponseType'],
      SpatialQuery['ParamType']
    >({
      query: (param) => ({
        url: 'query',
        method: 'post',
        body: param
      })
    })

  })
})

export const {
  useLazyListByExtentQuery,
  useSpatialQueryMutation
} = aprApi
