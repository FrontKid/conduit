import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { IGlobalFeed } from './dto/global-feed-in'



export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<IGlobalFeed, any>({
      query: () => ({
        url: '/articles',
        method: 'get',
      })
    })
  })
})

export const { useGetGlobalFeedQuery } = feedApi
