import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legal - PrestonKwei.com',
  description: 'Legal policies and terms for PrestonKwei.com',
  icons: {
    icon: 'https://cdn.prestonkwei.com/personalwebsitefavicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
