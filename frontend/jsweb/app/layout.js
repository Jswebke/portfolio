import { Inter, Lora, Quattrocento, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
// import loading from './portfolio/loading'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'], variable:'--font-inter' })
const lora = Lora({ subsets: ['latin'], weight:'400', variable:"--font-lora" })
const quattrocento  = Quattrocento({ subsets: ['latin'], weight:'400', variable:"--font-quattrocento" })
const poppins = Poppins({subsets: ['latin'], weight:'500', variable: '--font-poppins'})
const poppinsLight = Poppins({subsets: ['latin'], weight:'200', variable: '--font-poppinsLight'})
const roboto = Roboto({subsets: ['latin'], weight:'300', variable: '--font-roboto'})


export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/logo.svg"></link>

      <body className={`${quattrocento.variable} ${lora.variable} ${inter.variable} ${poppins.variable} ${poppinsLight.variable} ${roboto.variable}`}>
        {children}</body>
      
    </html>
  )
}
