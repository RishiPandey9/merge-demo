import ResetPassword from '@/components/project1/Auth/ResetPassword'
import Breadcrumb from '@/components/project1/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | Property',
}

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ token?: string }>
}) => {
  const resolvedSearchParams = await searchParams
  const token = resolvedSearchParams?.token ?? ''

  return (
    <>
      <Breadcrumb pageName='Reset Password' />
      <ResetPassword token={token} />
    </>
  )
}

export default ResetPasswordPage
