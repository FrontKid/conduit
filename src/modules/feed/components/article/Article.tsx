import { DateTime } from 'luxon'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFeedArticle } from '../../data/dto/global-feed-in'
import { FavoriteButton } from '../favorite-button/Favorite-button'
import { TagList } from '../tag-list/TagList'

interface IArticleProps extends IFeedArticle { }

export const Article: FC<IArticleProps> = (
  { author,
    createdAt,
    favoritesCount,
    title,
    description,
    tagList }
) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className='flex'>
            <Link to={`/@${author.username}`}>
              <img className='inline-block h-8 w-8 rounded-full' src={author.image} alt={`${author.username} avatar`} />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link className='font-medium' to={`/@${author.username}`}>
                {author.username}
              </Link>
              <span className='text-conduit-gray text-date'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link className='hover:no-underline' to='/article/qwert'>
          <h1 className='mb-1 font-semebold text-2xl text-conduit-darkestGray'>{title}</h1>
          <p
            className='text-conduit-darkenGray font-light mb-1'>
            {description}
          </p>
          <div className='flex justify-between'>
            <span className='text-conduit-gray text-date font-light'>Read more...</span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article >
  )
}