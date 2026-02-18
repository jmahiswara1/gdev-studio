export interface Service {
    slug: string;
    title: string;
    icon: string;
    shortDesc: string;
    longDesc: string;
    features: string[];
    priceStart: string;
    duration: string;
    waMessage: string;
}

export const services: Service[] = [
    {
        slug: "landing-page",
        title: "Landing Page",
        icon: "Layout",
        shortDesc: "Website satu halaman yang dirancang untuk konversi tinggi dengan desain modern dan animasi interaktif.",
        longDesc: "Landing page profesional yang dioptimalkan untuk konversi. Dilengkapi dengan hero section yang memikat, section fitur, testimonial, pricing, FAQ, dan CTA. Semua elemen dirancang dengan animasi halus menggunakan GSAP dan Framer Motion untuk pengalaman pengguna premium.",
        features: [
            "Desain responsif mobile-first",
            "Animasi scroll-triggered (GSAP)",
            "SEO-optimized structure",
            "WhatsApp integration",
            "Analytics tracking setup",
            "Hosting & domain guidance",
        ],
        priceStart: "Rp 500.000",
        duration: "3-5 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan pembuatan Landing Page.",
    },
    {
        slug: "company-profile",
        title: "Company Profile",
        icon: "Building2",
        shortDesc: "Website multi-halaman yang merepresentasikan identitas dan layanan perusahaan secara profesional.",
        longDesc: "Website company profile lengkap dengan halaman beranda, tentang kami, layanan, portofolio, dan kontak. Desain disesuaikan dengan brand identity perusahaan. Dilengkapi CMS sederhana untuk update konten mandiri.",
        features: [
            "Multi-page responsive design",
            "Brand-consistent UI/UX",
            "Contact form integration",
            "Google Maps embed",
            "Social media integration",
            "Basic CMS untuk update konten",
        ],
        priceStart: "Rp 800.000",
        duration: "5-7 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan pembuatan Company Profile.",
    },
    {
        slug: "dashboard",
        title: "Dashboard & Admin Panel",
        icon: "BarChart3",
        shortDesc: "Dashboard admin dengan visualisasi data, CRUD operations, dan manajemen role-based access.",
        longDesc: "Sistem dashboard admin fullstack dengan autentikasi, manajemen user, CRUD data, visualisasi chart, dan role-based access control. Backend API terintegrasi dengan database relasional. Cocok untuk sistem internal perusahaan.",
        features: [
            "Autentikasi & authorization",
            "CRUD operations lengkap",
            "Data visualization (charts)",
            "Role-based access control",
            "RESTful API backend",
            "Database design & migration",
        ],
        priceStart: "Rp 1.500.000",
        duration: "10-14 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan pembuatan Dashboard/Admin Panel.",
    },
    {
        slug: "portfolio",
        title: "Portfolio Website",
        icon: "User",
        shortDesc: "Website portofolio personal dengan animasi interaktif untuk menampilkan karya dan kemampuan.",
        longDesc: "Portfolio website yang dirancang untuk membuat kesan pertama yang luar biasa. Dilengkapi dengan elemen interaktif, animasi halus, showcase proyek dengan filter, dan halaman detail proyek. Desain premium yang membedakan dari portfolio generik.",
        features: [
            "Animasi interaktif premium",
            "Project showcase dengan filter",
            "Detail page per proyek",
            "Blog/artikel section (opsional)",
            "Dark/light mode toggle",
            "Contact form terintegrasi",
        ],
        priceStart: "Rp 600.000",
        duration: "4-6 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan pembuatan Portfolio Website.",
    },
    {
        slug: "ai-integration",
        title: "AI Integration",
        icon: "Brain",
        shortDesc: "Integrasi fitur AI (chatbot, analisis, rekomendasi) ke dalam aplikasi web existing atau baru.",
        longDesc: "Tambahkan kemampuan AI ke dalam platform digital Anda. Mulai dari chatbot cerdas berbasis Gemini/OpenAI, sistem rekomendasi, analisis sentimen, hingga fitur pencarian semantik. Implementasi menggunakan API AI terkini dengan arsitektur yang scalable.",
        features: [
            "AI Chatbot integration",
            "Natural language processing",
            "Recommendation engine",
            "Streaming response support",
            "API rate limiting & fallback",
            "Fine-tuning untuk use case spesifik",
        ],
        priceStart: "Rp 1.000.000",
        duration: "7-10 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan AI Integration.",
    },
    {
        slug: "api-development",
        title: "API Development",
        icon: "Code2",
        shortDesc: "Backend RESTful API yang scalable, terdokumentasi, dan production-ready untuk kebutuhan bisnis.",
        longDesc: "Pengembangan backend API yang mengikuti best practices industri. Arsitektur bersih dengan repository pattern, autentikasi JWT/OAuth, validasi input, error handling, rate limiting, dan dokumentasi Swagger/Postman. Siap di-deploy ke cloud.",
        features: [
            "RESTful API design",
            "JWT/OAuth authentication",
            "Input validation & sanitization",
            "Swagger/Postman documentation",
            "Unit & integration testing",
            "Cloud deployment setup",
        ],
        priceStart: "Rp 1.200.000",
        duration: "7-12 hari",
        waMessage: "Halo Gadang, saya tertarik dengan layanan API Development.",
    },
];
