"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories: (ProjectCategory | "All")[] = [
    "All",
    "Landing Page",
    "Dashboard",
    "Company Profile",
    "Portfolio",
    "Academic",
    "AI",
];

import { SectionReveal } from "@/components/ui/section-reveal";

export default function ProjectsPage() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="bg-background pt-24 pb-16 min-h-screen">
            <SectionReveal>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        {t.projectsBento.title}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Explore our portfolio of high-quality web applications and digital products.
                    </p>
                </div>
            </SectionReveal>

            {/* Filter Tabs */}
            <SectionReveal delay={0.1}>
                <div className="container mx-auto px-4 mb-16 overflow-x-auto pb-4">
                    <div className="flex justify-start sm:justify-center gap-2 min-w-max">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                variant="ghost"
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all h-auto ${activeCategory === category
                                    ? "bg-foreground text-background shadow-md transform scale-105 hover:bg-foreground/90 hover:text-background"
                                    : "bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground"
                                    }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </SectionReveal>

            {/* Projects Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    layout
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 font-display text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground flex-grow">
                                        {project.shortDesc}
                                    </p>

                                    <div className="flex items-center gap-2 mt-auto">
                                        <div className="flex flex-wrap gap-1.5 w-full">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <span key={tech} className="bg-accent px-2 py-0.5 rounded text-[10px] whitespace-nowrap text-muted-foreground font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="bg-accent px-2 py-0.5 rounded text-[10px] text-muted-foreground font-mono">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
                                        aria-label={`View project ${project.title}`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-muted-foreground">No projects found in this category.</p>
                        <Button
                            variant="link"
                            onClick={() => setActiveCategory("All")}
                            className="mt-4 text-primary hover:underline font-medium p-0 h-auto"
                        >
                            View all projects
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
