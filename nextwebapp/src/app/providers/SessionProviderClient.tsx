// src/app/providers/SessionProviderClient.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderClientProps {
    readonly children: ReactNode;
    readonly session?: any;
}

export default function SessionProviderClient({
    children,
    session,
}: Readonly<SessionProviderClientProps>) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
