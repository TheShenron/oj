// app/(protected)/layout.tsx

import { SiteHeader } from "@/components/header/header";
import Footer from "@/components/footer/Footer";

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <SiteHeader />
      </header>
      <main className="px-5">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
