import { cn } from "@/lib/utils";

interface GridBackgroundProps {
    className?: string;
}

export function GridBackground({ className }: Readonly<GridBackgroundProps>) {
    return (
        <div className={cn("absolute inset-0 -z-10", className)}>
            {/* Grid pattern */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            {/* TOP → BOTTOM brightness gradient */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-t",
                    // Light mode
                    "from-white/90 via-white/50 to-white/20",
                    // Dark mode
                    "dark:from-black/90 dark:via-black/50 dark:to-black/20"
                )}
            />

            {/* Radial fade (keeps center clean) */}
            <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />
        </div>
    );
}
