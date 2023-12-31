"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import { AppContext, AppContextProvider } from "@/config/AppContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"min-h-min "}>
        <AppContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
