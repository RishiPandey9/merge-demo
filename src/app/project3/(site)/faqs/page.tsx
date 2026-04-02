import FaqQuestion from "@/components/project3/Home/faq";
import HeroSub from "@/components/project3/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ | Sustainable",
};

const page = () => {
  return (
    <>
      <HeroSub title="Faqs" description="" />
      <FaqQuestion />
    </>
  );
};

export default page;
