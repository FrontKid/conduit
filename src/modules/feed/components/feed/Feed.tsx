import { FC } from 'react'
import { Container } from '../../../../common/components/container/Container'
import { FeedToggle } from '../feed-toggle/FeedToggle'
import { ArticleList } from '../article-list/ArticleList'
import { useGetGlobalFeedQuery } from '../../data/repository'

//interface IFeed { }

export const Feed: FC = () => {

  const { data, error, isLoading } = useGetGlobalFeedQuery('')

  if (isLoading) {
    return <Container>
      Feed loading...
    </Container>
  }

  if (error) {
    return <Container>
      Error while loading feed
    </Container>
  }

  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  )
}