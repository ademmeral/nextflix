import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import {Barlow} from 'next/font/google';
import Head from "./head";

import '@/styles/reset.css';
import '@/styles/global.css';
import CurrentGenreProvider from "@/contexts/CurrentGenre";

const barlow = Barlow({
  weight: ['300','400','500','600','700'], 
  subsets: ['latin'] 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.className}>
      <Head />
      <body>
        <div className="overlay">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
