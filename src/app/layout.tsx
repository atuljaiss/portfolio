import type { Metadata } from "next"
import { playfair, inter } from "./fonts"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import data from "@/data/site-data.json"

const { seo } = data

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    type: seo.ogType as "website",
    locale: seo.ogLocale,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg dark:bg-bg-dark text-text dark:text-text-light antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
