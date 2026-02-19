"use client";

import Link from "next/link";
import { ArrowRight, Layout, Building2, BarChart3, User, Brain, Code2, LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { services } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
    Layout,
    Building2,
    BarChart3,
    User,
    Brain,
    Code2,
};

export function Services() {
    const { t } = useTranslation();

    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground">
                        {t.services.badge}
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.services.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        {t.services.subtitle}
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <div
                                key={service.slug}
                                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    {Icon && <Icon size={24} />}
                                </div>

                                <h3 className="mb-3 font-display text-xl font-bold">{service.title}</h3>
                                <p className="mb-6 flex-grow text-muted-foreground">
                                    {service.shortDesc}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {service.techStack?.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {service.techStack && service.techStack.length > 3 && (
                                        <span className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-muted-foreground">
                                            +{service.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                                    <div>
                                        <div className="text-xs text-muted-foreground">{t.services.from}</div>
                                        <div className="font-mono text-lg font-bold text-primary">
                                            {service.priceStart}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/services#${service.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        Detail <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                        {t.services.view_all} <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
