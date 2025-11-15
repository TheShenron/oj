// app/(protected)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken } from "@/lib/jwt"; // adjust path if needed
import PostLoginNav from "@/components/nav/PostLoginNav";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        // not logged in
        redirect("/login");
    }

    try {
        // throws if invalid/expired
        verifyAccessToken(token);
        // If valid — render the app chrome (nav/sidebar) + children
        return (
            <div style={{ display: "flex", minHeight: "100vh" }}>
                <PostLoginNav />
                <div style={{ flex: 1, padding: 20 }}>{children}</div>
            </div>
        );
    } catch (err) {
        // invalid token => go to login
        redirect("/login");
    }
}
