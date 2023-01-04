import clsx from 'clsx'
import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'

//interface Props { }

export const Header: FC = () => {
  const navLinksCalasses = ({ isActive }: { isActive: boolean }): string => clsx('py-navItem', {
    'text-black/30': !isActive,
    'text-black/80': isActive
  })

  return (
    <header>
      <nav className='px-2 py-4'>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link className='font-titillium text-2xl mr-8 text-conduit-green' to='/'>conduit</Link>

          <ul className='pl-0 mb-0 flex'>
            <li>
              <NavLink className={navLinksCalasses} to='/'>Home</NavLink>
            </li>
            <li className='ml-4'>
              <NavLink className={navLinksCalasses} to='/sign-in'>Sign in</NavLink>
            </li>
            <li className='ml-4'>
              <NavLink className={navLinksCalasses} to='/sign-up'>Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}