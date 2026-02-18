"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Github, Instagram, Linkedin, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
    { icon: Github, href: "https://github.com/jmahiswara1", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/j.mahiswara_", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/gadangjatumahiswara", label: "LinkedIn" },
    { icon: Globe, href: "https://jmahiswara.my.id", label: "Portfolio" },
];

const quickLinks = [
    { key: "home", href: "/" },
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "pricing", href: "/pricing" },
];

const serviceLinks = [
    { label: "Landing Page", href: "/services#landing-page" },
    { label: "Company Profile", href: "/services#company-profile" },
    { label: "Dashboard", href: "/services#dashboard" },
    { label: "Portfolio", href: "/services#portfolio" },
    { label: "AI Integration", href: "/services#ai-integration" },
    { label: "API Development", href: "/services#api-development" },
];

export function Footer() {
    const { resolvedTheme } = useTheme();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";

    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4 lg:col-span-1">
                        {mounted && (
                            <Image
                                src={logoSrc}
                                alt="GDev Studio"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        )}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {t.footer.tagline}
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold font-sans uppercase tracking-wider text-foreground">
                            {t.footer.quick_links}
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {t.nav[link.key as keyof typeof t.nav]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold font-sans uppercase tracking-wider text-foreground">
                            {t.footer.services}
                        </h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold font-sans uppercase tracking-wider text-foreground">
                            {t.footer.connect}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:gadangjatumahiswara@gmail.com"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    gadangjatumahiswara@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/6281216312645"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    +62 812 1631 2645
                                </a>
                            </li>
                            <li>
                                <span className="text-sm text-muted-foreground">
                                    Kediri, East Java, Indonesia
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
