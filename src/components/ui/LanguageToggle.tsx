"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { type Locale } from "@/lib/i18n/useTranslation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageToggle() {
    const { locale, setLocale } = useTranslation();

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "id" as Locale : "en" as Locale);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="group relative h-9 w-12 overflow-hidden rounded-full border border-border bg-background hover:bg-accent"
            aria-label="Toggle language"
        >
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={locale}
                    initial={{ y: locale === "en" ? -20 : 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: locale === "en" ? 20 : -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 flex items-center justify-center font-medium"
                >
                    {locale === "en" ? "EN" : "ID"}
                </motion.span>
            </AnimatePresence>
        </Button>
    );
}
