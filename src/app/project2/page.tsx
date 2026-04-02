import React from "react";
import { Metadata } from "next";
import Hero from "@/components/project2/Home/Hero";
import Services from "@/components/project2/Home/Services";
import Features from "@/components/project2/Home/Features";
import ProductDoc from "@/components/project2/Home/ProductDoc";
import Plan from "@/components/project2/Home/Plans";
import FAQ from "@/components/project2/Home/FAQ";
import Info from "@/components/project2/Home/Info";
import Partners from "@/components/project2/Home/Partner";

export const metadata: Metadata = {
  title: "SaasCandy",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <ProductDoc />
      <Plan />
      <FAQ />
      <Info />
      <Partners />
    </main>
  );
}
