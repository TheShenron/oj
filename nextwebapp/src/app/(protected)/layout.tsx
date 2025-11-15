// app/(protected)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken } from "@/lib/jwt";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        redirect("/login");
    }

    try {
        verifyAccessToken(token); // will throw if invalid/expired
        return <>{children}</>;
    } catch (err) {
        // invalid => clear cookie and redirect
        redirect("/login");
    }
}
