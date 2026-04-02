import HeroSub from '@/components/project3/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/project3/Home/Counter';
import WorkGrow from '@/components/project3/Home/work-grow';
import BuildAmazing from '@/components/project3/Home/Build-Amazing';
export const metadata: Metadata = {
    title: "About | Sustainable",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="About Us"
            description=""
        />
        <Counter/>
        <WorkGrow/>
        <BuildAmazing isSpace={false} />
    </>
  )
}

export default page