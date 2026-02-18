"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="bg-background pt-24 pb-16">
            {/* Hero Section */}
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
                            <a
                                href="/resume_gadang.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                            >
                                Download Resume <Download size={16} />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                            >
                                Contact Me <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border-2 border-border bg-muted rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl group">
                            {/* Using a placeholder for now, would be replaced by actual photo */}
                            <div className="absolute inset-0 flex items-center justify-center bg-accent/20 text-muted-foreground">
                                <span className="text-9xl opacity-20 font-display font-bold">GM</span>
                            </div>

                            {/* If image exists in public folder we would use it:
               <Image src="/profile.jpg" alt="Gadang Jatu Mahiswara" fill className="object-cover" /> 
               */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-xl">Gadang Jatu Mahiswara</p>
                                    <p className="text-sm opacity-80">Fullstack Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
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

            {/* Stats/Contact Info */}
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
        </div>
    );
}
