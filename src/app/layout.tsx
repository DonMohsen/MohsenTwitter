import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: 'Lama Dev X Clone',
  description: 'Next.js social media application project',
}

export default function AppLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
      <QueryProvider>
    
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
    </QueryProvider>
    </ClerkProvider>
  );
}
