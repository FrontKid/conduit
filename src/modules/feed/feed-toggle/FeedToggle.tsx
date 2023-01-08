import { FC } from 'react'
import { NavLink } from 'react-router-dom'

//interface IFeedToggle { }

export const FeedToggle: FC = () => {
  return (
    <div>
      <ul>
        <li><NavLink className='text-conduit-green bg-white border-b-2 inline-block border-conduit-green cursor-default hover:no-underline hover:text-conduit-green py-2 px-4' to='/'>Global leed</NavLink></li>
      </ul>
    </div>
  )
}