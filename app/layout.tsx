import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "molekulárna | Chemické kurzy",
	description: "TODO: Popis stránky",
	keywords:
		"chemie, chemie kurzy, chemické kurzy, online chemie učení, chemie vzdělávání, chemie lekce, chemistry, střední škola chemie, maturita z chemie",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="cs" suppressHydrationWarning>
			<body
				className={`${inter.className} antialiased min-h-screen flex flex-col`}
			>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<SiteFooter />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
