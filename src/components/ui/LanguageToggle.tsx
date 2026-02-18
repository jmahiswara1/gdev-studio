"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import type { Locale } from "@/lib/i18n/useTranslation";

export function LanguageToggle() {
    const { locale, setLocale } = useTranslation();

    return (
        <div className="flex items-center overflow-hidden rounded-full border border-border bg-accent/50">
            <button
                onClick={() => setLocale("en" as Locale)}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${locale === "en"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    } rounded-full`}
            >
                EN
            </button>
            <button
                onClick={() => setLocale("id" as Locale)}
                className={`px-3 py-1.5 text-xs font-medium transition-all ${locale === "id"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    } rounded-full`}
            >
                ID
            </button>
        </div>
    );
}
