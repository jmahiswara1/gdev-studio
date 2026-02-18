"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export function HowItWorks() {
    const { t } = useTranslation();

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground">
                        {t.howitworks.badge}
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.howitworks.title}
                    </h2>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:text-left">
                    {t.howitworks.steps.map((step, index) => (
                        <div key={step.title} className="relative group">
                            {/* Connecting line (hidden on mobile and last item) */}
                            {index < t.howitworks.steps.length - 1 && (
                                <div className="absolute right-0 top-8 z-0 hidden h-0.5 w-[calc(100%-4rem)] translate-x-1/2 bg-border lg:block group-hover:bg-primary/50 transition-colors duration-500" />
                            )}

                            <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold font-mono text-foreground ring-4 ring-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground lg:mx-0">
                                {index + 1}
                            </div>

                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-foreground">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-muted-foreground">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
