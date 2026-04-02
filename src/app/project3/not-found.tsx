import HeroSub from "@/components/project3/SharedComponent/HeroSub";
import NotFound from "@/components/project3/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Sustainable ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/project3/", text: "Home" },
    { href: "/project3/contact", text: "404" },
  ];
  return (
    <>
      <HeroSub
        title="404"
        description="We Can't Seem to Find The Page You're Looking For."
        
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
