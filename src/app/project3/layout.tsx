import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/project3/Layout/Header";
import Footer from "@/components/project3/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/project3/ScrollToTop';
import Aoscompo from "@/utils/project3/aos";
import SessionProviderComp from "@/components/project3/nextauth/SessionProvider";
import { AuthDialogProvider } from "@/context/project3/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";
const dmsans = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${dmsans.className} project3-scope`}>
      <AuthDialogProvider>
        <SessionProviderComp>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <Header />
              <NextTopLoader color='#f9c78f' />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </SessionProviderComp>
      </AuthDialogProvider>
    </div>
  );
}
