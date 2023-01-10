import { FC } from 'react'
interface IFavoriteButtonProps {
  count: number;
}

export const FavoriteButton: FC<IFavoriteButtonProps> = ({ count }) => {
  return (
    <button className='text-conduit-green
      border-conduit-green
      leading-5 text-center
      align-middle
      cursor-pointer
      select-none
      border
      py-1
      px-2
      text-sm
      rounded-buttonSm
      hover:text-white
      hover:bg-conduit-green
      focus:bg-conduit-darkGreen
      transition-colors'>
      <i className='ion-heart' />
      <span className='ml-1 font-normal'>{count}</span>
    </button>
  )
}