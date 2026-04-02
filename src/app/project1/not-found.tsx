import HeroSub from '@/components/project1/SharedComponent/HeroSub'
import NotFound from '@/components/project1/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 Page | Venus ',
}

const ErrorPage = () => {
  return (
    <>
      <HeroSub title='404' />
      <NotFound />
    </>
  )
}

export default ErrorPage
