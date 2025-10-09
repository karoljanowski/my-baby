import type { Metadata } from "next";
import { Poppins, Playwrite_US_Trad } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playwrite = Playwrite_US_Trad({
  variable: "--font-playwrite",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Wyjątkowy dziennik wspomnień | My Baby",
  description: "Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} ${playwrite.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
