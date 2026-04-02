import HeroSub from "@/components/project2/SharedComponent/HeroSub";
import ProductDoc from "@/components/project2/Home/ProductDoc";
import Features from "@/components/project2/Home/Features";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/project2/", text: "Home" },
    { href: "/project2/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Features />
      <ProductDoc />
    </>
  );
};

export default page;
