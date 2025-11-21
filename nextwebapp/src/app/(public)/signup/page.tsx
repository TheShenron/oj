// app/(public)/login/page.tsx
"use client";

import { SignupComp } from "@/app/(public)/signup/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupComp />
      </div>
    </div>
  );
}
