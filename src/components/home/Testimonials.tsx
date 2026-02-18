"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { testimonials } from "@/lib/data/testimonials";
import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
    const { t } = useTranslation();

    return (
        <section className="bg-accent/30 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-block rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm">
                        {t.testimonials.badge}
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {t.testimonials.title}
                    </h2>
                </div>

                <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {testimonials.slice(0, 4).map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between rounded-2xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="space-y-4">
                                <div className="flex gap-0.5 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" className={i < testimonial.rating ? "" : "text-muted"} />
                                    ))}
                                </div>
                                <p className="text-sm italic leading-relaxed text-muted-foreground">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
