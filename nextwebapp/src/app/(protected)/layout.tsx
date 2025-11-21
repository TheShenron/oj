// app/(protected)/layout.tsx

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
