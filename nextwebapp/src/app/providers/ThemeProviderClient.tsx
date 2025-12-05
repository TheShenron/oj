"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ReactNode } from "react";

interface ThemeProviderClientProps {
    readonly children: ReactNode;
}

export default function ThemeProviderClient({
    children,
}: Readonly<ThemeProviderClientProps>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
