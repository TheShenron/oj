// app/layout.tsx
import SessionProviderClient from "./providers/SessionProviderClient";
import ThemeProviderClient from "./providers/ThemeProviderClient";
import ToastProviderClient from "./providers/ToastProviderClient";

// styles
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProviderClient>
          <ThemeProviderClient>
            {children}
          </ThemeProviderClient>
          <ToastProviderClient />
        </SessionProviderClient>
      </body>
    </html>
  );
}
