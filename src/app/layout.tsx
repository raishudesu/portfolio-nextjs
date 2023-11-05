import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import BackToTop from "@/components/BackToTop";
import PageWrapper from "@/components/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

const openGraphImage = { images: ["https://i.imgur.com/WFJV8Lw.png"] };

export const metadata: Metadata = {
  title: "Barysh Bacaltos | Portfolio",
  description: "A showcase of my skills and passion in full-stack development.",
  openGraph: {
    ...openGraphImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-[#16BC25] scrollbar-track-gray-100 dark:scrollbar-track-[#242424]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PageWrapper>
            <main className="min-h-screen p-6">{children}</main>
          </PageWrapper>
          <Footer />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
