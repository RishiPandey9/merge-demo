import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/project2/Layout/Header";
import Footer from "@/components/project2/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/project2/ScrollToTop";
import SessionProviderComp from "@/providers/project2/nextauth/SessionProvider";
import { AuthDialogProvider } from "@/context/project2/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${manrope.className} project2-scope`}>
      <NextTopLoader color="#EE7B11" />
      <AuthDialogProvider>
        <SessionProviderComp>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SessionProviderComp>
      </AuthDialogProvider>
    </div>
  );
}