import { FC } from 'react'
import { Article } from '../article/Article'

//interface IArticleList { }

export const ArticleList: FC = () => {
  return (
    <div className='w-3/4'>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}