import { Documentation } from '@/components/project1/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Featurs | Desgy',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
