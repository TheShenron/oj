export function UnderlineIcon({ className, strokeWidth }: { className?: string, strokeWidth?: number }) {
    return (
        <svg
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-4 text-black dark:text-white ${className ?? ""}`}
        >
            <path
                d="M5 15q95-10 190 0"
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth ?? 4}
            />
        </svg>
    );
}
