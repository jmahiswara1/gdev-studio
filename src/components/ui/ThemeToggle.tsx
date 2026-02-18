"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="rounded-lg p-2 hover:bg-accent" aria-label="Toggle theme">
                <Sun size={18} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 transition-colors hover:bg-accent"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
