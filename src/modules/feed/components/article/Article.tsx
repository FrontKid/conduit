import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteButton } from '../favorite-button/Favorite-button'
import { TagList } from '../tag-list/TagList'

//interface Props { }

export const Article: FC = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to='/@frontkid'>
            <img className='inline-block h-8 w-8 rounded-full' src="https://api.realworld.io/images/demo-avatar.png" alt="user avatar" />
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
            <Link className='font-medium' to='/@frontkid'>
              Poltorak Denys
            </Link>
            <span className='text-conduit-gray text-date'>6 jan 2023</span>
          </div>
          <FavoriteButton />
        </div>
        <Link className='hover:no-underline' to='/article/qwert'>
          <h1 className='mb-1 font-semebold text-2xl text-conduit-darkestGray'>Some title</h1>
          <p
            className='text-conduit-darkenGray font-light mb-1'>
            Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.
          </p>
          <div className='flex justify-between'>
            <span className='text-conduit-gray text-date font-light'>Read more...</span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  )
}