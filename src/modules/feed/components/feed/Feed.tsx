import { FC } from 'react'
import { Container } from '../../../../common/components/container/Container'
import { FeedToggle } from '../../feed-toggle/FeedToggle'
import { ArticleList } from '../article-list/ArticleList'

//interface IFeed { }

export const Feed: FC = () => {
  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <ArticleList />
        <div className="w-1/4">tags</div>
      </div>
    </Container>
  )
}