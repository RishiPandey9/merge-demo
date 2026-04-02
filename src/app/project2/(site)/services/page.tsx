import ServicesCard from "@/components/project2/Services/ServiceCard";
import HeroSub from "@/components/project2/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/project2/", text: "Home" },
    { href: "/project2/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ServicesCard />
    </>
  );
};

export default page;
