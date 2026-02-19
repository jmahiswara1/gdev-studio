"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { motion } from "framer-motion";
import { TechIcons } from "@/components/ui/icons";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
    "Supabase", "MongoDB", "GSAP", "Framer Motion"
];

export function TechStack() {
    const { t } = useTranslation();

    // Map of tech names to their display content (Icon or Text)
    const techItems = [
        { name: "Next.js", Icon: TechIcons["Next.js"] },
        { name: "React", Icon: TechIcons["React"] },
        { name: "TypeScript", Icon: TechIcons["TypeScript"] },
        { name: "Tailwind CSS", Icon: TechIcons["Tailwind CSS"] },
        { name: "Node.js", Icon: TechIcons["Node.js"] },
        { name: "Supabase", Icon: TechIcons["Supabase"] },
        { name: "MongoDB", Icon: TechIcons["MongoDB"] },
        { name: "GSAP", Icon: TechIcons["GSAP"] },
        { name: "Framer Motion", Icon: TechIcons["Framer Motion"] },
    ];

    return (
        <section className="bg-background py-16 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-sans">
                    {t.techstack.title}
                </h2>
            </div>

            <div className="relative flex w-full overflow-hidden py-4 mask-linear-fade">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

                <div className="flex w-full overflow-hidden select-none">
                    <motion.div
                        className="flex min-w-full shrink-0 gap-16 sm:gap-24 items-center justify-around"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {[...techItems, ...techItems].map((item, i) => (
                            <div key={`tech-${i}`} className="group relative flex items-center justify-center p-2">
                                {item.Icon ? (
                                    <item.Icon
                                        className="h-8 w-auto md:h-10 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
                                    />
                                ) : (
                                    <span className="whitespace-nowrap text-xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-display">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex min-w-full shrink-0 gap-16 sm:gap-24 items-center justify-around"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {[...techItems, ...techItems].map((item, i) => (
                            <div key={`tech-duplicate-${i}`} className="group relative flex items-center justify-center p-2">
                                {item.Icon ? (
                                    <item.Icon
                                        className="h-8 w-auto md:h-10 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
                                    />
                                ) : (
                                    <span className="whitespace-nowrap text-xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-display">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
