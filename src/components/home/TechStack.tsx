"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express",
    "NestJS", "PostgreSQL", "MongoDB", "Supabase", "Prisma", "GSAP",
    "Framer Motion", "Three.js", "OpenAI", "Gemini API", "Verce", "AWS"
];

export function TechStack() {
    const { t } = useTranslation();

    return (
        <section className="bg-background py-16 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-sans">
                    {t.techstack.title}
                </h2>
            </div>

            <div className="relative flex w-full overflow-hidden py-4">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex min-w-full shrink-0 gap-12 sm:gap-16 items-center"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {[...technologies, ...technologies].map((tech, i) => (
                        <span
                            key={i}
                            className="whitespace-nowrap text-xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-display"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="flex min-w-full shrink-0 gap-12 sm:gap-16 items-center absolute top-4 left-[100%]"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    aria-hidden="true"
                >
                    {[...technologies, ...technologies].map((tech, i) => (
                        <span
                            key={i}
                            className="whitespace-nowrap text-xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-display"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
