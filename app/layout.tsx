import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
