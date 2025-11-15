// app/components/nav/PreLoginNav.tsx
"use client";

import Link from "next/link";

export default function PreLoginNav() {
    return (
        <header style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", gap: 12 }}>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
        </header>
    );
}
