// app/(public)/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form/login-form";

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
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
}
