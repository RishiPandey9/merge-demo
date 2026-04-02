import NotFound from "@/components/project2/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Saturn ",
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/project2/", text: "Home" },
    { href: "javascript:void(0)", text: "404" },
  ];
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
