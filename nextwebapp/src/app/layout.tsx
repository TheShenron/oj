// app/layout.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div style={{ padding: 20 }}>{children}</div>
            </body>
        </html>
    );
}

function Header() {
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Check if logged in by calling /api/auth/me
    useEffect(() => {
        let mounted = true;

        async function fetchUser() {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (mounted) {
                    setUser(data.user); // null or user object
                }
            } catch (e) {
                if (mounted) setUser(null);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchUser();
        return () => { mounted = false; };
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        router.replace("/login");  // redirect to login
        router.refresh();          // re-render the navbar
    }

    return (
        <header style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", gap: 12 }}>
            <Link href="/">Home</Link>

            {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    {!user && <Link href="/login">Login</Link>}
                    {user && (
                        <>
                            <Link href="/dashboard">Dashboard</Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}
                </>
            )}
        </header>
    );
}
