import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { FEED_PAGE_SIZE } from '../consts';
import { IGlobalFeed } from './dto/global-feed-in'

interface IGlobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<IGlobalFeed, IGlobalFeedParams>({
      query: ({ page }) => ({
        url: '/articles',
        method: 'get',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE
        }
      })
    })
  })
})

export const { useGetGlobalFeedQuery } = feedApi
