import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from '@/components/ui/sonner';
import { SiteFooter } from '@/components/layout/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'molekulárna | Premium Chemistry Courses',
  description: 'Master chemistry concepts with our comprehensive courses designed for all levels - from beginners to advanced students.',
  keywords: 'chemistry courses, online chemistry learning, chemistry education, chemistry lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}