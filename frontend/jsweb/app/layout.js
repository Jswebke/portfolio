import { Inter, Lora, Quattrocento } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable:'--font-inter' })
const lora = Lora({ subsets: ['latin'], weight:'400', variable:"--font-lora" })
const quattrocento  = Quattrocento({ subsets: ['latin'], weight:'400', variable:"--font-quattrocento" })

export const metadata = {
  title: 'Js web',
  description: 'Our company portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quattrocento.variable} ${lora.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
