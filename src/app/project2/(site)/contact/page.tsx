import HeroSub from "@/components/project2/SharedComponent/HeroSub";
import ContactForm from "@/components/project2/Contact/Form";
import ContactInfo from "@/components/project2/Contact/ContactInfo";
import Location from "@/components/project2/Contact/OfficeLocation";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/project2/", text: "Home" },
    { href: "/project2/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
