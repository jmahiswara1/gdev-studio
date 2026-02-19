"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { services } from "@/lib/data/services";
import { pricingTiers } from "@/lib/data/pricing"; // Reusing pricing tiers for standard package reference
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";

import { SectionReveal } from "@/components/ui/section-reveal";

export default function ServicesPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background pt-24 pb-16">
            {/* Header */}
            <SectionReveal>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {t.services.title}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        {t.services.subtitle}
                    </p>
                </div>
            </SectionReveal>

            {/* Services List */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {services.map((service, index) => (
                    <SectionReveal key={service.slug} direction={index % 2 === 0 ? "left" : "right"}>
                        <div
                            id={service.slug}
                            className={`flex flex-col gap-12 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                                }`}
                        >
                            {/* Visual/Image Placeholder */}
                            <div className="flex-1">
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-accent/50 border border-border flex items-center justify-center p-8 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                                    {/* Abstract visualization of the service */}
                                    <div className="relative text-center space-y-4 transition-transform duration-500 group-hover:scale-105">
                                        <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl inline-block shadow-lg border border-border">
                                            {/* We could render the actual icon here but let's make it bigger or use an illustration if available. 
                         For now, reusing the icon in a large format. */}
                                            {/* Dynamic icon rendering would need the icon map from Home/Services. 
                             Simulating with a generic placeholder or just text for now to keep it clean. */}
                                            <span className="font-display text-xl font-bold">{service.title}</span>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <div className="h-2 w-16 rounded-full bg-primary/20 animate-pulse" />
                                            <div className="h-2 w-8 rounded-full bg-primary/40 animate-pulse delay-75" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm font-medium">
                                        <span>{t.services.from} {service.priceStart}</span>
                                    </div>
                                    <h2 className="mt-4 font-display text-3xl font-bold">{service.title}</h2>
                                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                        {service.longDesc}
                                    </p>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-2">
                                            <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" />
                                            <span className="text-sm text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4 border-t border-border">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock size={16} />
                                        <span>{t.services.duration}: <span className="font-semibold text-foreground">{service.duration}</span></span>
                                    </div>

                                    <a
                                        href={`https://wa.me/6281216312645?text=${encodeURIComponent(service.waMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                                    >
                                        {t.services.cta} <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>
                ))}
            </div>

            {/* Trust Indicator */}
            <p className="text-sm text-muted-foreground">
                Trusted by clients for clean code and professional results.
            </p>
        </div>

    );
}
