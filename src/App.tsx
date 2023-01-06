//react
import { FC } from 'react'

//components
import { Header } from './common/components/header/Header'
import { Banner } from './common/components/banner/Banner'

//interface Props { }

export const App: FC = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}