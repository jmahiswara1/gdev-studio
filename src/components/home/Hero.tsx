"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const { t } = useTranslation();
    const terminalRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reveal text animation
        if (textRef.current) {
            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
            );
        }

        // Terminal typing effect
        if (terminalRef.current) {
            const lines = terminalRef.current.querySelectorAll(".terminal-line");
            gsap.fromTo(
                lines,
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, stagger: 1.5, duration: 0.5, ease: "power1.out" }
            );
        }
    }, []);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 lg:px-8">
            {/* Background gradients */}
            <div className="bg-gradient-radial absolute -top-[20%] -left-[10%] h-[500px] w-[500px] from-primary/10 to-transparent blur-3xl" />
            <div className="bg-gradient-radial absolute top-[40%] -right-[10%] h-[400px] w-[400px] from-blue-500/10 to-transparent blur-3xl" />

            <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left: Text Content */}
                <div ref={textRef} className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/30 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        {t.hero.badge}
                    </div>

                    <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {t.hero.title}
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0 lg:text-xl">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                        <Button
                            href="/projects"
                            size="lg"
                            className="group rounded-xl px-8 py-6 text-base font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                            {t.hero.cta_primary}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            href="/contact"
                            variant="outline"
                            size="lg"
                            className="rounded-xl px-8 py-6 text-base font-medium"
                        >
                            {t.hero.cta_secondary}
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-8 pt-8 sm:grid-cols-4 lg:pt-12">
                        {Object.entries(t.hero.stats).map(([key, label]) => (
                            <div key={key} className="space-y-1 text-center lg:text-left">
                                <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                                    {key === "projects" ? "50+" :
                                        key === "clients" ? "30+" :
                                            key === "tech" ? "15+" : "4+"}
                                </div>
                                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Terminal Visual */}
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-[#1a1b26] shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-2 flex items-center gap-1.5 text-xs text-white/40 font-mono">
                                <Terminal size={12} />
                                <span>bash — 80x24</span>
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={terminalRef}
                            className="min-h-[300px] space-y-2 p-6 font-mono text-sm sm:min-h-[400px]"
                        >
                            {t.hero.terminal_lines.map((line: string, i: number) => (
                                <div key={i} className="terminal-line flex gap-2">
                                    <span className="text-pink-500">❯</span>
                                    <span className={`${i === 0 || i === 3 ? "text-cyan-400" : "text-emerald-400"}`}>
                                        {line}
                                    </span>
                                </div>
                            ))}
                            <div className="terminal-line animate-pulse">
                                <span className="inline-block h-5 w-2.5 bg-white/50 align-middle"></span>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
