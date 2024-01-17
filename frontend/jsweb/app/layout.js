import { Inter, Lora, Quattrocento } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'], variable:'--font-inter' })
const lora = Lora({ subsets: ['latin'], weight:'400', variable:"--font-lora" })
const quattrocento  = Quattrocento({ subsets: ['latin'], weight:'400', variable:"--font-quattrocento" })

export const metadata = {
  title: 'Creating Real Business Value',
  description: 'An web design agency that creates real business value',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./logo.svg" type="image/x-icon" />
  
    
      <body className={`${quattrocento.variable} ${lora.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
