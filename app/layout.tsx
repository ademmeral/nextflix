import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import {Barlow} from 'next/font/google';
import './global.css';
import { Metadata } from "next";

const barlow = Barlow({
  weight: ['300','400','500','600','700'], 
  subsets: ['latin'] 
});

export const metadata:Metadata = {
  title : 'Nextflix',
  description : 'Where you can find any movie you want!'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.className}>
      <body>
        <div className="overlay grid grid-rows-layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
