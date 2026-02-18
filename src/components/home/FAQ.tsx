"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground">
                        {t.faq.badge}
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.faq.title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {t.faq.items.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:bg-accent/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium"
                            >
                                <span className="text-lg">{item.q}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="border-t border-border px-6 pb-6 pt-2 text-muted-foreground">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
