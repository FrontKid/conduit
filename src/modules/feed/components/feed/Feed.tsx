import { FC, useState } from 'react'
import { Container } from '../../../../common/components/container/Container'
import { FeedToggle } from '../feed-toggle/FeedToggle'
import { ArticleList } from '../article-list/ArticleList'
import { useGetGlobalFeedQuery } from '../../data/repository'
import ReactPaginate from 'react-paginate'
import { FEED_PAGE_SIZE } from '../../consts'
import { useSearchParams } from 'react-router-dom'
import { serializeSearchParams } from '../../../../utils/router'

//interface IFeed { }

export const Feed: FC = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState<number>(searchParams.get('page') ? Number(searchParams.get('page')) : 0)
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ page })


  if (isLoading || isFetching) {
    return <Container>
      Feed loading...
    </Container>
  }

  if (error) {
    return <Container>
      Error while loading feed
    </Container>
  }

  const handlePageChange = ({ selected }: { selected: number }): void => {
    setPage(selected)
    setSearchParams(serializeSearchParams({ page: String(selected) }))
  }

  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <div className='w-3/4'>
          <ArticleList list={data?.articles || []} />
          <nav className='my-6'>
            <ReactPaginate
              pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
              pageRangeDisplayed={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
              previousLabel={null}
              nextLabel={null}
              forcePage={page}
              onPageChange={handlePageChange}
              containerClassName='flex'
              pageClassName='group'
              pageLinkClassName='group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r p-3 text-conduit-green bg-white border border-conduit-lightenGray -ml-px hover:bg-conduit-pageCountHoverBg'
              activeClassName='group active'
              activeLinkClassName='group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:cursor-default group-[.active]:border-conduit-green'
            />
          </nav>
        </div>
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  )
}