import React from 'react'
import Hero from '@/components/project1/Home/Hero'
import Aboutus from '@/components/project1/Home/AboutUs'
import Dedicated from '@/components/project1/Home/Dedicated'
import Digital from '@/components/project1/Home/Digital'
import Beliefs from '@/components/project1/Home/Beliefs'
import Work from '@/components/project1/Home/Work'
import Team from '@/components/project1/Home/Team'
import Featured from '@/components/project1/Home/Featured'
import Manage from '@/components/project1/Home/Manage'
import FAQ from '@/components/project1/Home/FAQ'
import Testimonial from '@/components/project1/Home/Testimonials'
import Articles from '@/components/project1/Home/Articles'
import Join from '@/components/project1/Home/Joinus'
import Insta from '@/components/project1/Home/Insta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desgy Solutions',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
      <Insta />
    </main>
  )
}
