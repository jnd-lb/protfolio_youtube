import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jihad Noureddine | Freelance Web Developer',
  description: 'Skilled web developer freelancer creating responsive websites and web apps. Expertise in HTML, CSS, JavaScript. Elevate your online presence with tailored solutions. Contact now for top-notch web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
