import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Wang - Full Stack Engineer',
  description: 'Product-minded Full Stack Engineer with 11+ years of experience shipping production-ready software in fast-paced startup environments.',
  keywords: ['Kevin Wang', 'Full Stack Engineer', 'React', 'Node.js', 'Python', 'Java', 'Go', 'AWS', 'GCP'],
  authors: [{ name: 'Kevin Wang', url: 'https://github.com/techspire0924' }],
  creator: 'Kevin Wang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kevin-wang-portfolio.vercel.app',
    title: 'Kevin Wang - Full Stack Engineer',
    description: 'Product-minded Full Stack Engineer with 11+ years of experience',
    siteName: 'Kevin Wang Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Wang - Full Stack Engineer',
    description: 'Product-minded Full Stack Engineer with 11+ years of experience',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
