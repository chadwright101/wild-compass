/* import type { Metadata } from "next"; */

import Header from "./_components/navigation/header";
import Footer from "./_components/navigation/footer";

import "./_styles/globals.css";

/* export const metadata: Metadata = {
  metadataBase: new URL(""),
  description: "",
  keywords: "r",
  openGraph: {
    description: "",
    type: "website",
    locale: "en_ZA",
    siteName: "",
    images: [
      {
        url: "",
      },
    ],
  },
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
