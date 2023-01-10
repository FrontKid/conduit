import { FC } from 'react'
import { v4 as getRandomKey } from 'uuid'
import { IFeedArticle } from '../../data/dto/global-feed-in'
import { Article } from '../article/Article'

interface IArticleList {
  list: IFeedArticle[];
}

export const ArticleList: FC<IArticleList> = ({ list }) => {
  return (
    <div>
      {list.map(article => <Article key={getRandomKey()} {...article} />)}
    </div>
  )
}