"use client";

import { Toaster } from "@/components/ui/sonner";

export default function ToastProviderClient() {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                style: { boxShadow: "none" },
                duration: 1500,
            }}
        />
    );
}
