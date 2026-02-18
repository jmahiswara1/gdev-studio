"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

// WhatsApp icon as inline SVG component
function WhatsAppIcon({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

// FAQ responses for offline mode
const faqResponses: Record<string, { keywords: string[]; response_en: string; response_id: string }[]> = {
    general: [
        {
            keywords: ["price", "harga", "cost", "biaya", "berapa", "how much"],
            response_en: "Our pricing starts from Rp 300,000 for a Starter package, Rp 500,000 for Basic, Rp 1,000,000 for Professional, Rp 2,000,000 for Business, and custom pricing for Enterprise. Visit our /pricing page for full details!",
            response_id: "Harga kami mulai dari Rp 300.000 untuk paket Starter, Rp 500.000 untuk Basic, Rp 1.000.000 untuk Professional, Rp 2.000.000 untuk Business, dan harga kustom untuk Enterprise. Kunjungi halaman /pricing untuk detail lengkap!",
        },
        {
            keywords: ["technology", "tech", "teknologi", "stack", "framework"],
            response_en: "We use Next.js, React, TypeScript, and Tailwind CSS for frontend. For backend: Node.js, Express, NestJS, or Laravel. Databases: PostgreSQL, MongoDB, Supabase. We also work with GSAP, Framer Motion, and AI integrations.",
            response_id: "Kami menggunakan Next.js, React, TypeScript, dan Tailwind CSS untuk frontend. Untuk backend: Node.js, Express, NestJS, atau Laravel. Database: PostgreSQL, MongoDB, Supabase. Kami juga bekerja dengan GSAP, Framer Motion, dan integrasi AI.",
        },
        {
            keywords: ["time", "lama", "duration", "waktu", "how long", "berapa lama"],
            response_en: "Timeline depends on complexity. Landing page: 3-5 days, Company Profile: 5-7 days, Dashboard: 10-14 days, AI Integration: 7-10 days. We provide accurate estimates after initial consultation.",
            response_id: "Timeline tergantung kompleksitas. Landing page: 3-5 hari, Company Profile: 5-7 hari, Dashboard: 10-14 hari, AI Integration: 7-10 hari. Kami memberikan estimasi akurat setelah konsultasi awal.",
        },
        {
            keywords: ["contact", "hubungi", "whatsapp", "wa", "reach"],
            response_en: "You can reach Gadang via WhatsApp at +62 812 1631 2645, email at gadangjatumahiswara@gmail.com, or fill out the contact form on the /contact page.",
            response_id: "Anda bisa menghubungi Gadang via WhatsApp di +62 812 1631 2645, email di gadangjatumahiswara@gmail.com, atau isi formulir di halaman /contact.",
        },
        {
            keywords: ["revision", "revisi", "change", "update"],
            response_en: "Yes! Each package includes revisions. Professional: 3 revisions, Business: 5, Enterprise: unlimited. Additional revisions can be arranged at per-task rates.",
            response_id: "Ya! Setiap paket termasuk revisi. Professional: 3 revisi, Business: 5, Enterprise: tanpa batas. Revisi tambahan bisa diatur dengan tarif per task.",
        },
        {
            keywords: ["payment", "bayar", "dp", "pembayaran"],
            response_en: "We require 50% upfront (DP) to start the project. The remaining 50% is due upon completion and your approval, before deployment.",
            response_id: "Kami memerlukan DP 50% untuk memulai proyek. Sisa 50% dibayarkan setelah proyek selesai dan disetujui, sebelum deployment.",
        },
    ],
};

function findFAQResponse(message: string, locale: string): string | null {
    const lower = message.toLowerCase();
    for (const category of Object.values(faqResponses)) {
        for (const faq of category) {
            if (faq.keywords.some((kw) => lower.includes(kw))) {
                return locale === "id" ? faq.response_id : faq.response_en;
            }
        }
    }
    return null;
}

export function FloatingFAB() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const { t, locale } = useTranslation();

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages.slice(-10),
                }),
            });

            if (!response.ok) {
                // Fallback to FAQ mode
                setIsOffline(true);
                const faqAnswer = findFAQResponse(userMessage, locale);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            faqAnswer ||
                            (locale === "id"
                                ? "Maaf, saya tidak menemukan jawaban untuk pertanyaan Anda. Silakan hubungi kami via WhatsApp untuk bantuan lebih lanjut."
                                : "Sorry, I couldn't find an answer to your question. Please contact us via WhatsApp for further assistance."),
                    },
                ]);
                setIsLoading(false);
                return;
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = "";

            setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, { stream: true });
                    assistantMessage += chunk;
                    setMessages((prev) => {
                        const updated = [...prev];
                        updated[updated.length - 1] = {
                            role: "assistant",
                            content: assistantMessage,
                        };
                        return updated;
                    });
                    scrollToBottom();
                }
            }
        } catch {
            // Network error — fallback to FAQ
            setIsOffline(true);
            const faqAnswer = findFAQResponse(userMessage, locale);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        faqAnswer ||
                        (locale === "id"
                            ? "Maaf, asisten AI sedang tidak tersedia. Silakan hubungi kami via WhatsApp."
                            : "Sorry, the AI assistant is currently unavailable. Please contact us via WhatsApp."),
                },
            ]);
        } finally {
            setIsLoading(false);
            scrollToBottom();
        }
    };

    // Auto-scroll when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages, chatOpen]);

    // Initial greeting
    useEffect(() => {
        if (chatOpen && messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content: locale === "id"
                        ? "Halo! Ada yang bisa saya bantu mengenai layanan GDev Studio?"
                        : "Hello! How can I help you with GDev Studio services?"
                }
            ]);
        }
    }, [chatOpen, locale]);

    const waUrl = "https://wa.me/6281216312645?text=" + encodeURIComponent(
        locale === "id"
            ? "Halo Gadang, saya tertarik dengan layanan GDev Studio."
            : "Hi Gadang, I'm interested in GDev Studio services."
    );

    return (
        <>
            {/* Chat panel */}
            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-lg sm:right-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border bg-foreground px-4 py-3 text-background">
                            <span className="text-sm font-semibold font-sans">
                                {t.chat.title}
                                {isOffline && (
                                    <span className="ml-2 rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-300">
                                        Offline
                                    </span>
                                )}
                            </span>
                            <button onClick={() => setChatOpen(false)} className="rounded-lg p-1 hover:bg-background/10">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-72 overflow-y-auto p-4">
                            {messages.length === 0 && (
                                <p className="text-center text-sm text-muted-foreground">
                                    {t.chat.placeholder}
                                </p>
                            )}
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"
                                        }`}
                                >
                                    <span
                                        className={`inline-block max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.role === "user"
                                                ? "bg-foreground text-background"
                                                : "bg-accent text-accent-foreground"
                                            }`}
                                    >
                                        {msg.content || (isLoading && i === messages.length - 1 ? "..." : "")}
                                    </span>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input */}
                        <div className="border-t border-border p-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder={t.chat.placeholder}
                                    className="flex-1 rounded-xl border border-border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="rounded-xl bg-foreground p-2 text-background transition-opacity hover:opacity-80 disabled:opacity-40"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB buttons */}
            <div className="fixed bottom-6 right-4 z-50 flex flex-col-reverse items-end gap-3 sm:right-6">
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {/* WhatsApp button */}
                            <motion.a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0 }}
                                className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
                            >
                                <WhatsAppIcon size={18} />
                                <span className="hidden sm:inline">{t.fab.wa_label}</span>
                            </motion.a>

                            {/* AI Chat button */}
                            <motion.button
                                onClick={() => setChatOpen(!chatOpen)}
                                initial={{ opacity: 0, scale: 0, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.08 }}
                                className="flex items-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105"
                            >
                                <MessageCircle size={18} />
                                <span className="hidden sm:inline">{t.fab.ai_label}</span>
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>

                {/* Main toggle */}
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform"
                >
                    <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <MessageCircle size={24} />
                    </motion.div>
                </motion.button>
            </div>
        </>
    );
}
