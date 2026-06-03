export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
  <header>
    <h1>My Website</h1>
  </header>

  {children}

  <footer>
    <p>Copyright 2026</p>
  </footer>
</body>
    </html>
  )
}