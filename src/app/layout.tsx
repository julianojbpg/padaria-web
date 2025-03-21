import Footer from "@/components/footer/Footer"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header/Header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
