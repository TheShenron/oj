'use client";'
import PreLoginNav from "@/components/nav/PreLoginNav"

// app/page.tsx
export default function HomePage() {
    return (
        <>
            <PreLoginNav />
            <main style={{ padding: 20 }}>
                <h1>Home</h1>
                <p>Welcome — use the Login link to see the protected Dashboard.</p>
            </main>
        </>
    );
}
