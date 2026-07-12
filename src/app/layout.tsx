import type {Metadata} from "next";
import {JetBrains_Mono, Space_Grotesk} from "next/font/google";
import {SITE} from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.bio,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} scroll-smooth`}
        >
        <body className="min-h-screen overflow-x-hidden bg-background font-display text-foreground antialiased">
        {children}
        </body>
        </html>
    );
}
