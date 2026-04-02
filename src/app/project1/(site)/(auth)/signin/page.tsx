import Signin from '@/components/project1/Auth/SignIn'
import Breadcrumb from '@/components/project1/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | Property',
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName='Sign In Page' />

      <Signin />
    </>
  )
}

export default SigninPage
