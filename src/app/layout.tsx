import { Persist, Providers } from '@/store/provider'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import store from '../store'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hybrid Neural Network',
  description: 'Owned by Jia Jun Chang',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Persist>
            <NavBar />
            {children}
          </Persist>
        </Providers>
      </body>
    </html>
  )
}
