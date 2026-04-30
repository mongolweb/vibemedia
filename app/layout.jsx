import './globals.css'

export const metadata = {
  title: 'VIBE MEDIA | Digital Growth Partner',
  description: 'Modern digital agency landing page featuring smooth animations and a dark aesthetic.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
