import Navbar from "@/components/NavBar";
import "./globals.css";
import { Footer } from "@/components/Footer";
import BackgroundSelector from "@/components/backgrounds/BackgroundSelector";
import { Anton, Geist } from "next/font/google";
import { SITE_CONFIG } from "@/config";
import { Metadata } from "next";
import JsonLd from "@/components/schema/JsonLd";

const { metadataInfo } = SITE_CONFIG

export const metadata: Metadata = {
  title: metadataInfo.title.default, 
  description: metadataInfo.description,
  metadataBase: new URL(metadataInfo.siteUrl),
  keywords: metadataInfo.keywords,
  openGraph: {
    title: metadataInfo.openGraph.title,
    description: metadataInfo.openGraph.description,
    url: metadataInfo.openGraph.url, 
    siteName: metadataInfo.openGraph.siteName,
    locale: metadataInfo.openGraph.locale,
    type: metadataInfo.openGraph.type as "website",
    images: metadataInfo.openGraph.images.map(image => ({
        url: image.url,
        width: image.width,
        height: image.height,
        alt: image.alt,
    }))
  }
}

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap'
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-geist',
  display: 'swap'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased ${geist.variable} ${anton.variable} `}
        data-theme={SITE_CONFIG.design.paleta}
        data-font={SITE_CONFIG.design.typography}
      >
        <JsonLd />
          <BackgroundSelector >
            <Navbar />
              {children}
            <Footer />
          </BackgroundSelector>
      </body>
    </html>
  );
}
