// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md rounded-2xl border-muted/40 bg-background/60 backdrop-blur-sm shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                    <div className="text-7xl font-semibold tracking-tight text-foreground/90">
                        404
                    </div>

                    <p className="text-sm text-muted-foreground">
                        The path you seek does not exist.
                    </p>

                    <div className="h-px w-12 bg-muted" />

                    <Button asChild variant="outline" className="mt-4">
                        <Link href="/">Return to calm</Link>
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}
