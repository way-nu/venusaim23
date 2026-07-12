import type {Metadata} from "next";
import {Space_Grotesk, JetBrains_Mono} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Venu Sai Madisetti — Full-stack Engineer",
    description:
        "Venu Sai Madisetti is a full-stack engineer building 0→1 products, cloud-native architectures and large-scale data pipelines.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col font-sans">{children}</body>
        </html>
    );
}
