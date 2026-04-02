import { HeaderItem } from "@/types/project3/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/project3/" },
  { label: "About", href: "/project3/about" },
  {
    label: "Portfolio",
    href: "/project3/portfolio",
    submenu: [
      { label: "Portfolio list", href: "/project3/portfolio" },
      { label: "Portfolio details", href: "/project3/portfolio/portfolio-1" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    submenu: [
      { label: "Blog list", href: "/project3/blog" },
      { label: "Blog details", href: "/project3/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/project3/contact" },
  { label: "Docs", href: "/project3/documentation" },
];
