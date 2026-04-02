import ResetPassword from '@/components/project2/Auth/ResetPassword'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | Saturn',
}

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ token?: string }>
}) => {
  const resolvedSearchParams = await searchParams
  const token = resolvedSearchParams?.token ?? ''

  return (
    <div className='pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode'>
      <div className='container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16'>
        <ResetPassword token={token} />
      </div>
    </div>
  )
}

export default ResetPasswordPage
