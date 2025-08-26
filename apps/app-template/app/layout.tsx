import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
    title: "{{APP_TITLE}}",
    description: "{{APP_DESCRIPTION}}",
    keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    authors: [{ name: "{{APP_TITLE}} Team" }],
    creator: "{{APP_TITLE}} Team",
    metadataBase: new URL("https://localhost:3000"),
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "./",
        title: "{{APP_TITLE}}",
        description: "{{APP_DESCRIPTION}}",
        siteName: "{{APP_TITLE}}",
    },
    twitter: {
        card: "summary_large_image",
        title: "{{APP_TITLE}}",
        description: "{{APP_DESCRIPTION}}",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
