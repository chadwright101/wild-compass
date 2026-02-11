import { Metadata } from "next";
import { Afacad, Raleway } from "next/font/google";

import Header from "../_components/navigation/header";
import Footer from "../_components/navigation/footer";

import "@/_styles/globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-afacad",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildcompassevents.co.za"),
  title: "Wild Compass Events - Garden Route",
  description:
    "Wild Compass Events is a premier event equipment dry hire company based in Plettenberg Bay, proudly servicing the entire Garden Route. Whether you're planning a wedding, corporate event, or a special celebration, we provide all the essential equipment to make your event unforgettable.",
  keywords:
    "event equipment hire, garden route, plettenberg bay, event hire, event equipment, event services, wedding hire, corporate event hire, party hire, garden route events",
  openGraph: {
    description:
      "Wild Compass Events is a premier event equipment dry hire company based in Plettenberg Bay, proudly servicing the entire Garden Route. Whether you're planning a wedding, corporate event, or a special celebration, we provide all the essential equipment to make your event unforgettable.",
    type: "website",
    locale: "en_ZA",
    siteName: "Wild Compass Events - Garden Route",
    images: [
      {
        url: "/assets/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${raleway.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
