import { FC } from 'react'
import { v4 as getRandomKey } from 'uuid'
interface ITagList {
  list: string[];
}

export const TagList: FC<ITagList> = ({ list }) => {
  return (
    <ul className='flex'>
      {list.map(tag => (
        <li
          key={getRandomKey()}
          className='font-light text-date
          border border-conduit-lightenGray
        text-conduit-tag mr-1 mb-0.2 px-tag rounded-tag'>
          {tag}
        </li>
      ))}
    </ul>
  )
}