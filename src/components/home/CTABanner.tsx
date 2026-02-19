"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
    const { t } = useTranslation();

    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-20 text-center shadow-2xl sm:px-16 sm:py-24 lg:px-24">
                    <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-background sm:text-4xl">
                        {t.cta.title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-background/80">
                        {t.cta.subtitle}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            href="/contact"
                            className="rounded-xl bg-background px-8 py-6 text-sm font-semibold text-foreground shadow-sm hover:bg-background/90 focus-visible:outline-white transition-transform hover:scale-105"
                        >
                            {t.cta.primary}
                        </Button>
                        <Button
                            href="/projects"
                            variant="secondary"
                            className="text-sm font-semibold rounded-xl px-6 py-6 bg-white/10 text-white hover:bg-white/20 hover:text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                        >
                            {t.cta.secondary} <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>

                    {/* Decorative gradients */}
                    <div className="absolute -left-20 -top-20 -z-10 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -right-20 -bottom-20 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />
                </div>
            </div>
        </section>
    );
}
