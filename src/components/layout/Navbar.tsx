"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
    { key: "home", href: "/" },
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "pricing", href: "/pricing" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setScrollProgress(window.scrollY / docHeight);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (navRef.current) {
            const items = navRef.current.querySelectorAll(".nav-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
            );
        }
    }, []);

    const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        {/* Logo */}
                        <Link href="/" className="nav-item relative z-10 flex shrink-0 items-center gap-2">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="GDev Studio"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto md:h-10"
                                    priority
                                />
                            )}
                        </Link>

                        {/* Desktop nav center */}
                        <div className="hidden items-center gap-1 md:flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={`nav-item rounded-lg px-4 py-2 text-sm font-medium transition-colors ${pathname === item.href
                                        ? "text-foreground bg-accent"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                        }`}
                                >
                                    {t.nav[item.key as keyof typeof t.nav]}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop actions right */}
                        <div className="hidden items-center gap-2 md:flex">
                            <LanguageToggle />
                            <AnimatedThemeToggle />
                        </div>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="nav-item relative z-10 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Scroll progress bar - Moved outside nav to ensure correct fixed positioning */}
            <div
                className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
                style={{ transform: `scaleX(${scrollProgress})` }}
            />

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
                    >
                        <div className="flex h-full flex-col items-center justify-center gap-6">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={`text-2xl font-medium transition-colors ${pathname === item.href
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                            }`}
                                    >
                                        {t.nav[item.key as keyof typeof t.nav]}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-8 flex items-center gap-4">
                                <LanguageToggle />
                                <AnimatedThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
