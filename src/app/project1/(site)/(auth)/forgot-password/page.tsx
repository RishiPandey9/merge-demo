import ForgotPassword from '@/components/project1/Auth/ForgotPassword'
import Breadcrumb from '@/components/project1/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password | Property',
}

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageName='Forgot Password' />
      <ForgotPassword />
    </>
  )
}

export default ForgotPasswordPage
