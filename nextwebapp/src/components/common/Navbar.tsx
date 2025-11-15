// app/components/common/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        let mounted = true;
        fetch("/api/auth/me")
            .then(r => r.json())
            .then(j => { if (mounted) setUser(j.user); })
            .catch(() => { if (mounted) setUser(null); });
        return () => { mounted = false; };
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        // reload client state by navigating
        router.replace("/login");
    }

    return (
        <nav style={{ padding: 8, display: "flex", gap: 12 }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {!user ? <Link href="/login">Login</Link> : (
                <>
                    <Link href="/dashboard">Dashboard</Link>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </nav>
    );
}
