import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Assistant - Your Smartest AI Assistant',
  description: 'Smarter sales, faster decisions: AI powered dashboard with call analytics, transcripts, summaries and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

