// app/dashboard/page.tsx
export default function DashboardPage() {
    console.log('Rendering DashboardPage');
    return (
        <main style={{ padding: 20 }}>
            <h1>Dashboard (Protected)</h1>
            <p>If you see this, your browser has a valid httpOnly token cookie.</p>
        </main>
    );
}
