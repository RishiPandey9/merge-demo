import HeroSub from "@/components/project2/SharedComponent/HeroSub";
import Plan from "@/components/project2/Home/Plans";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/project2/", text: "Home" },
    { href: "/project2/pricing", text: "Pricing" },
  ];
  return (
    <>
      <HeroSub
        title="Pricing"
        description="Choose the perfect plan that fits your needs. Whether you're just getting started or scaling up, we’ve got you covered."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Plan />
    </>
  );
};

export default page;
