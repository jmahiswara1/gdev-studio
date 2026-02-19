"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { Code2, PenTool, Cpu } from "lucide-react";

const icons = [Code2, PenTool, Cpu];

export function WhyUs() {
    const { t } = useTranslation();

    return (
        <section className="bg-accent/50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-block rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm">
                        {t.whyus.badge}
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.whyus.title}
                    </h2>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {t.whyus.pillars.map((pillar, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={pillar.title}
                                className="group relative flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                    <Icon size={32} />
                                </div>
                                <h3 className="mb-3 font-display text-xl font-bold">{pillar.title}</h3>
                                <p className="text-muted-foreground">{pillar.desc}</p>

                                {/* Decorative blob */}
                                <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100 blur-2xl" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
