import { FC } from 'react'
import { Container } from '../container/Container'

//interface Props  {}

export const Banner: FC = () => {
  return (
    <main>
      <div className='bg-conduit-green shadow-banner text-white p-8 mb-8'>
        <Container>
          <h1 className='font-titillium drop-shadow-logo text-center text-logo pb-2'>conduit</h1>
          <p className='text-center text-2xl font-light'>A place to share your knowledge.</p>
        </Container>
      </div>
    </main>
  )
}