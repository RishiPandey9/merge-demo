import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/project3/Home/Hero';
import BuildAmazing from '@/components/project3/Home/Build-Amazing'
import WorkGrow from '@/components/project3/Home/work-grow';
import Preferred from '@/components/project3/Home/preferred-plan';
import Counter from '@/components/project3/Home/Counter';
import FaqQuestion from '@/components/project3/Home/faq';
export const metadata: Metadata = {
  title: "Sustainable",
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <BuildAmazing isSpace={true} />
      <WorkGrow/>
      <Preferred/>
      <Counter/>
      <FaqQuestion/>
    </main>
  )
}
