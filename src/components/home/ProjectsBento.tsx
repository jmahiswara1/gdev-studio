"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { projects } from "@/lib/data/projects";
import { InteractiveHoverLinks } from "@/components/interactive-hover-links";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsBento() {
    const { t } = useTranslation();

    // Map top 5 featured projects to the format expected by InteractiveHoverLinks
    const featuredProjects = projects
        .filter((p) => p.featured)
        .slice(0, 5)
        .map((p) => ({
            heading: p.title,
            subheading: p.shortDesc,
            imgSrc: p.thumbnail,
            href: `/projects/${p.slug}`,
        }));

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:flex md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground">
                            {t.projectsBento.badge}
                        </div>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            {t.projectsBento.title}
                        </h2>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            {t.projectsBento.view_all} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                <InteractiveHoverLinks links={featuredProjects} />
            </div>
        </section>
    );
}
