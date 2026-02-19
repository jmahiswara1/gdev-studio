"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="size-8" />;
    }

    const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        // @ts-ignore - View Transitions API types might not be fully available
        if (!document.startViewTransition) {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
            return;
        }

        const transition = document.startViewTransition(async () => {
            const isDark = resolvedTheme === "dark";
            setTheme(isDark ? "light" : "dark");
            // Wait for the theme change to propagate
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            // Animate the new view expanding from the click position
            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="group relative size-10 rounded-full bg-background border border-border hover:bg-accent hover:text-foreground"
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
