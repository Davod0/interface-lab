import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://davodnikoyi.com"),

  title: "Davod Nikoyi",
  description: "Davod's portfolio website",

  icons: {
    icon: "/images/dav.svg",
     other: [
      {
        rel: "icon",
          url: "/favicon.png",
        type: "image/png",
      }
    ]
  },

  openGraph: {
    title: "Davod Nikoyi",
    description: "Welcome to my portfolio.",
    url: "https://davodnikoyi.com",
    siteName: "Davod Nikoyi",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Davod Nikoyi Portfolio",
      },
    ],
    locale: "en_SE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Davod Nikoyi",
    description: "Davod's portfolio website",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
