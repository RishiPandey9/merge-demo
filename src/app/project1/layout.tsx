import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/project1/Layout/Header'
import Footer from '@/components/project1/Layout/Footer'
import ScrollToTop from '@/components/project1/ScrollToTop'
import Aoscompo from '@/utils/project1/aos'
const font = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${font.className} project1-scope`}>
      <Aoscompo>
        <Header />
        {children}
        <Footer />
      </Aoscompo>
      <ScrollToTop />
    </div>
  )
}
