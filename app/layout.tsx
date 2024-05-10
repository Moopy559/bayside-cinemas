import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/SideNav";
import Search from "./ui/Search";
import LogIn from "./ui/LogIn";
import Magnify from "./ui/svg/Magnify";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bayside Cinemas",
  description: "Wynnum's Premium Movie Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kodeMono.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="w-full p-6 gap-y-8 flex flex-col overflow-scroll">
            <div className="flex gap-x-4 justify-between">
              <Magnify width={30} colour="#ff163c" />
              <Search />
              <LogIn />
            </div>
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
