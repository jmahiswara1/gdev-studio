"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { pricingTiers, paymentSteps } from "@/lib/data/pricing";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionReveal } from "@/components/ui/section-reveal";

export default function PricingPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background pt-24 pb-16">
            {/* Header */}
            <SectionReveal>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        {t.pricing.title}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        {t.pricing.subtitle}
                    </p>
                </div>
            </SectionReveal>

            {/* Pricing Grid */}
            <SectionReveal delay={0.2}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid max-w-lg mx-auto gap-8 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
                        {pricingTiers.map((tier) => (
                            <div
                                key={tier.slug}
                                className={`flex flex-col justify-between rounded-3xl p-6 xl:p-4 border transition-all hover:shadow-lg ${tier.highlighted
                                    ? "border-primary bg-primary/5 ring-1 ring-primary/20 scale-105 z-10"
                                    : "border-border bg-card/30"
                                    }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-lg font-bold">{tier.name}</h3>
                                        {tier.highlighted && (
                                            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                                                POPULAR
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold">{tier.price}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">{tier.priceNote}</div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-6 min-h-[40px]">
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {tier.features.slice(0, 8).map((feature) => ( // Show top 8 features only to keep card length manageable
                                            <li key={feature.label} className="flex gap-2 text-xs">
                                                {feature.included ? (
                                                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                                                ) : (
                                                    <X size={14} className="mt-0.5 shrink-0 text-muted-foreground/30" />
                                                )}
                                                <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                                                    {feature.label}
                                                </span>
                                            </li>
                                        ))}
                                        {tier.features.length > 8 && (
                                            <li className="text-xs text-muted-foreground pt-1 italic">
                                                + {tier.features.length - 8} more features
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <a
                                    href={`https://wa.me/6281216312645?text=${encodeURIComponent(tier.waMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full rounded-xl px-3 py-2 text-center text-sm font-semibold transition-colors ${tier.highlighted
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-accent text-accent-foreground hover:bg-accent/80"
                                        }`}
                                >
                                    {tier.ctaLabel}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>

            {/* Payment Flow */}
            <SectionReveal delay={0.4}>
                <div className="container mx-auto px-4 mt-24">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl font-bold">{t.pricing.payment_flow}</h2>
                    </div>

                    <div className="relative grid gap-8 md:grid-cols-5">
                        {/* Connector Line (Desktop) */}
                        <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-border md:block -z-10" />

                        {paymentSteps.map((step, index) => (
                            <div key={step.step} className="relative flex flex-col items-center text-center group">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background border-2 border-border text-xl font-bold text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary z-10">
                                    {step.step}
                                </div>
                                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground px-2">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>

            {/* FAQ Link */}
            <SectionReveal delay={0.5}>
                <div className="container mx-auto px-4 mt-24 text-center">
                    <div className="inline-flex items-center gap-2 rounded-2xl bg-accent/50 px-6 py-4">
                        <HelpCircle className="text-primary" />
                        <span className="mr-4 text-sm font-medium">Have more questions about billing?</span>
                        <Link href="/#faq" className="text-sm font-bold text-primary hover:underline">
                            Check FAQ
                        </Link>
                    </div>
                </div>
            </SectionReveal>
        </div>
    );
}
