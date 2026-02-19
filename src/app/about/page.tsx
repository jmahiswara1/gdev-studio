"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { SectionReveal } from "@/components/ui/section-reveal";
import Badge from "@/components/badge/Badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background pt-24 pb-16">
            {/* Hero Section */}
            <SectionReveal>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground mb-6">
                                {t.about.badge}
                            </div>
                            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                                {t.about.title}
                            </h1>
                            <h2 className="text-2xl font-semibold text-primary mb-6">{t.about.role}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {t.about.bio}
                            </p>



                            <div className="flex flex-wrap gap-4">
                                <Button
                                    href="/contact"
                                    size="lg"
                                    className="group rounded-xl px-8 py-6 text-base font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
                                >
                                    Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="flex flex-col items-center relative z-40 w-full">
                                <div className="relative w-full h-[600px] cursor-grab active:cursor-grabbing">
                                    <Badge className="w-full h-full" />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-bold text-xl text-foreground">Gadang Jatu Mahiswara</p>
                                    <p className="text-sm opacity-80 text-muted-foreground">Fullstack Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>

            {/* Values */}
            <SectionReveal delay={0.2}>
                <div className="container mx-auto px-4 mt-24">
                    <h2 className="text-3xl font-display font-bold text-center mb-12">{t.about.values_title}</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {t.about.values.map((value, i) => (
                            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="h-10 w-10 text-primary mb-4 font-display text-2xl font-bold bg-primary/10 rounded-lg flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionReveal>

            {/* Stats/Contact Info */}
            <SectionReveal delay={0.4}>
                <div className="container mx-auto px-4 mt-24">
                    <div className="rounded-3xl bg-accent p-8 md:p-12">
                        <div className="grid gap-8 md:grid-cols-3 text-center">
                            <div className="space-y-2">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-muted-foreground">gadangjatumahiswara@gmail.com</p>
                            </div>
                            <div className="space-y-2">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <h3 className="font-bold text-lg">WhatsApp</h3>
                                <p className="text-muted-foreground">+62 812 1631 2645</p>
                            </div>
                            <div className="space-y-2">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-bold text-lg">Location</h3>
                                <p className="text-muted-foreground">Kediri, East Java, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </div>
    );
}
