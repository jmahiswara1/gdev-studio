export interface PricingTier {
    name: string;
    slug: string;
    price: string;
    priceNote: string;
    description: string;
    features: { label: string; included: boolean }[];
    highlighted: boolean;
    ctaLabel: string;
    waMessage: string;
}

export const pricingTiers: PricingTier[] = [
    {
        name: "Starter",
        slug: "starter",
        price: "Rp 300.000",
        priceNote: "Sekali bayar",
        description: "Cocok untuk kebutuhan sederhana dan personal. Website satu halaman dengan desain bersih.",
        features: [
            { label: "1 halaman (single page)", included: true },
            { label: "Desain responsif", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "1x revisi minor", included: true },
            { label: "Animasi dasar", included: true },
            { label: "Custom domain setup", included: false },
            { label: "SEO optimization", included: false },
            { label: "CMS / admin panel", included: false },
            { label: "Database integration", included: false },
            { label: "AI features", included: false },
        ],
        highlighted: false,
        ctaLabel: "Mulai Starter",
        waMessage: "Halo Gadang, saya tertarik dengan paket Starter (Rp 300k).",
    },
    {
        name: "Basic",
        slug: "basic",
        price: "Rp 500.000",
        priceNote: "Sekali bayar",
        description: "Landing page profesional dengan animasi dan optimasi SEO. Ideal untuk promosi produk atau jasa.",
        features: [
            { label: "1 halaman (multi-section)", included: true },
            { label: "Desain responsif", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "2x revisi", included: true },
            { label: "Animasi scroll-triggered", included: true },
            { label: "Custom domain setup", included: true },
            { label: "SEO optimization", included: true },
            { label: "CMS / admin panel", included: false },
            { label: "Database integration", included: false },
            { label: "AI features", included: false },
        ],
        highlighted: false,
        ctaLabel: "Pilih Basic",
        waMessage: "Halo Gadang, saya tertarik dengan paket Basic (Rp 500k).",
    },
    {
        name: "Professional",
        slug: "professional",
        price: "Rp 1.000.000",
        priceNote: "Sekali bayar",
        description: "Website multi-halaman lengkap dengan animasi premium. Cocok untuk bisnis yang ingin tampil menonjol.",
        features: [
            { label: "Hingga 5 halaman", included: true },
            { label: "Desain responsif", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "3x revisi", included: true },
            { label: "Animasi premium (GSAP + Framer)", included: true },
            { label: "Custom domain setup", included: true },
            { label: "SEO optimization", included: true },
            { label: "CMS / admin panel", included: false },
            { label: "Database integration", included: false },
            { label: "AI features", included: false },
        ],
        highlighted: true,
        ctaLabel: "Pilih Professional",
        waMessage: "Halo Gadang, saya tertarik dengan paket Professional (Rp 1jt).",
    },
    {
        name: "Business",
        slug: "business",
        price: "Rp 2.000.000",
        priceNote: "Sekali bayar",
        description: "Solusi fullstack dengan backend, database, dan dashboard admin. Untuk bisnis serius yang butuh sistem terintegrasi.",
        features: [
            { label: "Hingga 10 halaman", included: true },
            { label: "Desain responsif", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "5x revisi", included: true },
            { label: "Animasi premium (GSAP + Framer)", included: true },
            { label: "Custom domain setup", included: true },
            { label: "SEO optimization", included: true },
            { label: "CMS / admin panel", included: true },
            { label: "Database integration", included: true },
            { label: "AI features", included: false },
        ],
        highlighted: false,
        ctaLabel: "Pilih Business",
        waMessage: "Halo Gadang, saya tertarik dengan paket Business (Rp 2jt).",
    },
    {
        name: "Enterprise",
        slug: "enterprise",
        price: "Custom",
        priceNote: "Hubungi untuk quote",
        description: "Solusi kustom tanpa batas. Termasuk integrasi AI, API development, dan konsultasi arsitektur sistem.",
        features: [
            { label: "Halaman unlimited", included: true },
            { label: "Desain responsif", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "Revisi unlimited", included: true },
            { label: "Animasi premium (GSAP + Framer)", included: true },
            { label: "Custom domain setup", included: true },
            { label: "SEO optimization", included: true },
            { label: "CMS / admin panel", included: true },
            { label: "Database integration", included: true },
            { label: "AI features", included: true },
        ],
        highlighted: false,
        ctaLabel: "Hubungi Kami",
        waMessage: "Halo Gadang, saya tertarik dengan paket Enterprise (Custom). Saya ingin konsultasi mengenai kebutuhan proyek saya.",
    },
];

export const paymentSteps = [
    {
        step: 1,
        title: "Konsultasi & Penawaran",
        desc: "Diskusikan kebutuhan via WhatsApp. Dapatkan penawaran harga dan timeline.",
    },
    {
        step: 2,
        title: "DP 50%",
        desc: "Pembayaran DP 50% dari total biaya untuk memulai pengerjaan proyek.",
    },
    {
        step: 3,
        title: "Pengerjaan",
        desc: "Proyek dikerjakan sesuai timeline. Update progress diberikan secara berkala.",
    },
    {
        step: 4,
        title: "Review & Revisi",
        desc: "Review hasil dan ajukan revisi sesuai kuota paket yang dipilih.",
    },
    {
        step: 5,
        title: "Pelunasan & Deploy",
        desc: "Pelunasan 50% sisa. Website di-deploy ke hosting dan domain Anda.",
    },
];
