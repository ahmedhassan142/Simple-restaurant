import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gusto Restaurant | Authentic Italian Cuisine',
  description: 'Experience authentic Italian cuisine. Order online for pickup or delivery.',
  keywords: 'restaurant, italian food, pizza, pasta, delivery, takeout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}