"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layout, Building2, BarChart3, User, Brain, Code2, LucideIcon } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { services } from "@/lib/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        if (section && trigger && window.innerWidth >= 1024) {
            const pin = gsap.fromTo(
                section,
                { x: 0 },
                {
                    x: () => -(section.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top top",
                        end: () => `+=${section.scrollWidth - window.innerWidth}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            return () => {
                pin.kill();
            };
        }
    }, []);

    return (
        <section ref={triggerRef} className="relative overflow-hidden bg-background py-20">
            <div className="container mx-auto mb-12 px-4 text-center sm:px-6 lg:px-8">
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

            <div className="overflow-hidden lg:h-screen lg:flex lg:items-center">
                <div
                    ref={sectionRef}
                    className="flex flex-col gap-6 px-4 sm:flex-row sm:overflow-x-auto sm:pb-8 lg:h-auto lg:overflow-visible lg:pb-0 lg:px-20"
                >
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <div
                                key={service.slug}
                                className="group relative flex w-full min-w-[300px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md sm:w-[350px] lg:h-[450px] lg:w-[400px]"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    {Icon && <Icon size={24} />}
                                </div>

                                <h3 className="mb-2 font-display text-2xl font-bold">{service.title}</h3>
                                <p className="mb-6 flex-grow text-muted-foreground">{service.shortDesc}</p>

                                <div className="mt-auto space-y-4">
                                    <div className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-end justify-between border-t border-border pt-4">
                                        <div>
                                            <div className="text-xs text-muted-foreground">{t.services.from}</div>
                                            <div className="font-mono text-lg font-bold text-primary">
                                                {service.priceStart}
                                            </div>
                                        </div>
                                        <Link
                                            href={`/services#${service.slug}`}
                                            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/80"
                                        >
                                            Detail
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover gradient */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                    {t.services.view_all} <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
