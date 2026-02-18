"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { pricingTiers } from "@/lib/data/pricing";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Pricing() {
    const { t } = useTranslation();
    const [isAnnual, setIsAnnual] = useState(false); // Placeholder for potential future toggle

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground">
                        {t.pricing.badge}
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.pricing.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {pricingTiers.slice(0, 3).map((tier) => (
                        <div
                            key={tier.slug}
                            className={`relative flex flex-col rounded-3xl p-8 shadow-sm transition-all hover:shadow-md xl:p-10 ${tier.highlighted
                                    ? "border-2 border-primary bg-background ring-1 ring-primary/20 scale-105 z-10"
                                    : "border border-border bg-card/50"
                                }`}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                                    {t.pricing.most_popular}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                            </div>

                            <div className="mb-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-foreground">
                                    {tier.price}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-muted-foreground">
                                    {tier.slug === "enterprise" ? "" : t.pricing.per_project}
                                </span>
                            </div>

                            <a
                                href={`https://wa.me/6281216312645?text=${encodeURIComponent(
                                    tier.waMessage
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-6 block rounded-xl px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.highlighted
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary"
                                        : "bg-accent text-accent-foreground hover:bg-accent/80 focus-visible:outline-accent"
                                    }`}
                            >
                                {tier.ctaLabel}
                            </a>

                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature.label} className="flex gap-x-3">
                                        {feature.included ? (
                                            <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        ) : (
                                            <X className="h-5 w-5 flex-none text-muted-foreground/50" aria-hidden="true" />
                                        )}
                                        <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                                            {feature.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/pricing"
                        className="text-sm font-semibold text-primary hover:underline"
                    >
                        {t.pricing.view_all} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
