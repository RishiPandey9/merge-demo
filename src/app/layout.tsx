import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Merged Next.js Demo',
  description: 'Unified demo for three Next.js projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
