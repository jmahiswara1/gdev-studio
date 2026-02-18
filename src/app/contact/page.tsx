"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { useState } from "react";
import { services } from "@/lib/data/services";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Construct WhatsApp message
        const text = `Halo Gadang, saya ${formData.name}.
    
Email: ${formData.email}
Service: ${selectedService || "General Inquiry"}

Pesan:
${formData.message}`;

        const url = `https://wa.me/6281216312645?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
        setIsSubmitting(false);
    };

    return (
        <div className="bg-background pt-24 pb-16 min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

                    {/* Left Column: Content */}
                    <div>
                        <div className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-foreground mb-6">
                            {t.contact.badge}
                        </div>
                        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            {t.contact.title}
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 text-neutral-500">
                            {t.contact.subtitle}
                        </p>

                        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-8">
                            <h3 className="font-bold font-display text-xl mb-4">What happens next?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">1</span>
                                    <p className="text-sm text-muted-foreground">We reply within 24 hours to schedule a consultation.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">2</span>
                                    <p className="text-sm text-muted-foreground">We discuss your project requirements and goals.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">3</span>
                                    <p className="text-sm text-muted-foreground">You get a proposal with timeline and pricing.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                                    {t.contact.name}
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="block w-full rounded-xl border-0 bg-background py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                                    {t.contact.email}
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="block w-full rounded-xl border-0 bg-background py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium leading-6 text-foreground">
                                    {t.contact.service}
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="service"
                                        name="service"
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="block w-full rounded-xl border-0 bg-background py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4"
                                    >
                                        <option value="">{t.contact.select_service}</option>
                                        {services.map((s) => (
                                            <option key={s.slug} value={s.title}>
                                                {s.title}
                                            </option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                                    {t.contact.message}
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="block w-full rounded-xl border-0 bg-background py-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4 resize-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full justify-center items-center gap-2 rounded-xl bg-foreground px-3 py-4 text-sm font-semibold leading-6 text-background shadow-sm hover:bg-foreground/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        {t.contact.submit} <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
