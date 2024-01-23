import type { Metadata } from 'next'
import styles from '@/styles/layout.module.scss'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={styles.body}>{children}</body>
    </html>
  )
}
