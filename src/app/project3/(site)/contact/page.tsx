import ContactForm from "@/components/project3/Contact/Form";
import ContactInfo from "@/components/project3/Contact/ContactInfo";
import Location from "@/components/project3/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/project3/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Sustainable",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/project3/", text: "Home" },
    { href: "/project3/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description=""

      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
