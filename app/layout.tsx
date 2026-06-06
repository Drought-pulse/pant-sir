
   
import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { ToastContainer } from "react-toastify";

// Font Configuration


export const metadata: Metadata = {
  title: "Hydraulic Turbine R and D Lab",
  description: "",
};   
const font = Jura({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}> 
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}  
      </body>
    </html>
  );
}
