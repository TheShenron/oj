// app/(public)/layout.tsx
"use client";

import React from "react";
import PreLoginNav from "@/components/nav/PreLoginNav";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <PreLoginNav />
            <main style={{ padding: 20 }}>{children}</main>
        </div>
    );
}
