// app/components/nav/PostLoginNav.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * This nav calls /api/auth/me to show login state.
 * You can replace with context or SWR for better UX.
 */
export default function PostLoginNav() {
    const [user, setUser] = useState<any | null>(null);
    const router = useRouter();

    useEffect(() => {
        let mounted = true;
        fetch("/api/auth/me")
            .then((r) => r.json())
            .then((j) => { if (mounted) setUser(j.user); })
            .catch(() => { if (mounted) setUser(null); });
        return () => { mounted = false; };
    }, []);

    async function handleLogout() {
        await fetch("/api/auth/logout", { method: "POST" });
        router.replace("/login");
    }

    return (
        <aside style={{ width: 220, borderRight: "1px solid #eee", padding: 16 }}>
            <div style={{ marginBottom: 12 }}>
                <strong>App</strong>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/dashboard">Dashboard</Link>
            </nav>

            <div style={{ marginTop: 24 }}>
                {user ? (
                    <>
                        <div style={{ marginBottom: 8 }}>Hi, {user.name ?? user.id}</div>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </aside>
    );
}
