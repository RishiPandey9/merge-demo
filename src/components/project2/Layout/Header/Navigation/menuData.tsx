import { HeaderItem } from "@/types/project2/menu";

export const headerData: HeaderItem[] = [
  { label: "Portfolio", href: "/project2/portfolio" },
  { label: "Pricing", href: "/project2/pricing" },
  {
    label: "Services",
    href: "/project2/services",
    submenu: [
      { label: "Services List", href: "/project2/services" },
      { label: "Services details", href: "/project2/services/edtech-apps" },
    ],
  },
  {
    label: "Blogs",
    href: "/project2/blogs",
    submenu: [
      { label: "Blog list", href: "/project2/blogs" },
      { label: "Blog details", href: "/project2/blogs/blog_1" },
    ],
  },
  { label: "Contact", href: "/project2/contact" },
  { label: "Docs", href: "/project2/documentation#version" },
];
