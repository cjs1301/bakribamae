import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
    title: "연봉 계산기 - 실수령액 계산",
    description: "한국의 세금과 4대보험을 고려한 연봉 실수령액을 계산해보세요.",
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
