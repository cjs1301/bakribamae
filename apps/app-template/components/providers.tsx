"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ResponsiveProvider } from "./responsive-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            <ResponsiveProvider>{children}</ResponsiveProvider>
        </NextThemesProvider>
    );
}
