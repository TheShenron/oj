// app/(public)/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("password");
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErr(null);
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const j = await res.json();
            if (!res.ok) {
                setErr(j?.message || "Login failed");
                setLoading(false);
                return;
            }
            // cookie is set by server (httpOnly). Redirect to dashboard.
            router.replace("/dashboard");
        } catch (err) {
            setErr("Network error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main style={{ maxWidth: 420, margin: "40px auto" }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
                <button type="submit" disabled={loading}>{loading ? "Logging..." : "Login"}</button>
                {err && <div style={{ color: "red" }}>{err}</div>}
            </form>
            <hr />
            <p>Demo: demo@example.com / password</p>
        </main>
    );
}
