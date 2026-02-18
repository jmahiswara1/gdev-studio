"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./en.json";
import id from "./id.json";

type Locale = "en" | "id";
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, id };

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    locale: "en",
    setLocale: () => { },
    t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const saved = localStorage.getItem("gdev-lang") as Locale | null;
        if (saved && (saved === "en" || saved === "id")) {
            setLocaleState(saved);
        }
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("gdev-lang", newLocale);
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                locale,
                setLocale,
                t: translations[locale],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}

export type { Locale, Translations };
