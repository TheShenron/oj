// app/layout.tsx
import { Button } from '@/components/ui/button';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Button>Click Me</Button>
            </body>
        </html>
    );
}
