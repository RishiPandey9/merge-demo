import React from 'react'
import BlogList from '@/components/project3/Blog/BlogList'
import HeroSub from '@/components/project3/SharedComponent/HeroSub'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog | Sustainable',
}

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/project3/', text: 'Home' },
    { href: '/project3/blog', text: 'Blog' },
  ]
  return (
    <>
      <HeroSub
        title='Blog'
        description='Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.'
      />
      <BlogList />
    </>
  )
}

export default BlogPage
