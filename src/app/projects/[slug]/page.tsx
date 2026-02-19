import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Zap, PenTool } from "lucide-react";
import { Metadata } from "next";

interface ProjectPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} | GDev Studio`,
        description: project.shortDesc,
    };
}

import { SectionReveal } from "@/components/ui/section-reveal";

export default function ProjectDetail({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-20 pt-24">
            <SectionReveal>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        href="/projects"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>

                    {/* Header */}
                    <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm">
                                {project.category}
                            </div>
                            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                                {project.title}
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                                {project.longDesc}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105 hover:bg-foreground/90"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                )}
                                {project.sourceUrl && (
                                    <a
                                        href={project.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent"
                                    >
                                        Source Code <Github size={16} />
                                    </a>
                                )}

                                <a
                                    href={`https://wa.me/6281216312645?text=${encodeURIComponent(project.waMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-green-600/30 bg-green-600/10 px-6 py-3 text-sm font-semibold text-green-600 transition-colors hover:bg-green-600/20"
                                >
                                    Order Similar
                                </a>
                            </div>
                        </div>

                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl border border-border/50 group">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Challenge & Solution */}
                            <SectionReveal direction="up" delay={0.2}>
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100/10 text-red-500">
                                            <Zap size={20} />
                                        </div>
                                        <h3 className="mb-2 font-display text-xl font-bold">The Challenge</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {project.challenge}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100/10 text-green-500">
                                            <PenTool size={20} />
                                        </div>
                                        <h3 className="mb-2 font-display text-xl font-bold">The Solution</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            </SectionReveal>

                            {/* Key Features */}
                            <SectionReveal direction="up" delay={0.3}>
                                <div>
                                    <h2 className="mb-6 font-display text-2xl font-bold">Key Features</h2>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-accent/20 p-4">
                                                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                                    {i + 1}
                                                </span>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-foreground">
                                                        {feature.label}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {feature.desc}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SectionReveal>

                            {/* Gallery (Placeholder as images array might be empty or repetitive) */}
                            {project.images && project.images.length > 0 && (
                                <SectionReveal direction="up" delay={0.4}>
                                    <div>
                                        <h2 className="mb-6 font-display text-2xl font-bold">Gallery</h2>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {project.images.map((img, i) => (
                                                <div key={i} className="relative aspect-video overflow-hidden rounded-xl bg-muted border border-border shadow-sm">
                                                    <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </SectionReveal>
                            )}
                        </div>

                        {/* Sidebar */}
                        <SectionReveal direction="left" delay={0.3}>
                            <div className="space-y-8">
                                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sticky top-24">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100/10 text-blue-500">
                                        <Layers size={20} />
                                    </div>
                                    <h3 className="mb-4 font-display text-xl font-bold">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md bg-accent px-2.5 py-1 text-xs font-mono font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Box */}
                                <div className="rounded-2xl bg-foreground p-6 text-background shadow-xl text-center">
                                    <h3 className="font-bold text-lg mb-2">Need something similar?</h3>
                                    <p className="text-sm opacity-80 mb-6 font-medium">
                                        Let's bring your idea to life with the same quality and attention to detail.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="block w-full rounded-lg bg-background py-3 text-sm font-bold text-foreground transition-transform hover:scale-105"
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </SectionReveal>
        </div>
    );
}
