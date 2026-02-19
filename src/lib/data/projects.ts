export type ProjectCategory =
  | "Landing Page"
  | "Dashboard"
  | "Company Profile"
  | "Portfolio"
  | "Academic"
  | "AI";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  features: { icon: string; label: string; desc: string }[];
  tech: string[];
  thumbnail: string;
  images: string[];
  demoUrl?: string;
  sourceUrl?: string;
  waMessage: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "kopipi",
    title: "Kopipi.",
    category: "Landing Page",
    shortDesc:
      "Platform profil dan reservasi kopi interaktif dengan fitur rekomendasi mood dan animasi halus.",
    longDesc:
      "Kopipi menghadirkan pengalaman digital yang selaras dengan suasana kedai kopi fisik: hangat, personal, dan modern. Website ini dirancang sebagai jembatan antara pelanggan dan cerita di balik setiap cangkir kopi. Dilengkapi dengan Smart Reservation System, Interactive Coffee Matchmaker, dan Immersive Storytelling timeline.",
    challenge:
      "Klien membutuhkan platform digital yang dapat merepresentasikan suasana hangat kedai kopi sekaligus menyediakan sistem reservasi cerdas yang memvalidasi ketersediaan meja berdasarkan tipe acara dan lokasi cabang.",
    solution:
      "Membangun website dengan Next.js 14 dan animasi Motion UI/UX menggunakan Framer Motion dan GSAP. Implementasi reservation form cerdas dengan validasi, Coffee Matchmaker kuis interaktif, dan ScrollStory timeline dengan efek parallax.",
    features: [
      { icon: "Calendar", label: "Smart Reservation", desc: "Validasi ketersediaan meja berdasarkan tipe acara dan cabang" },
      { icon: "Coffee", label: "Coffee Matchmaker", desc: "Kuis interaktif rekomendasi menu berdasarkan mood" },
      { icon: "BookOpen", label: "Immersive Storytelling", desc: "Timeline interaktif dengan efek parallax" },
      { icon: "Smartphone", label: "Responsive Design", desc: "Optimasi penuh untuk perangkat mobile" },
    ],
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lucide React"],
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=1000&fit=crop",
    ],
    demoUrl: "https://kopipi.vercel.app/",
    sourceUrl: "https://github.com/jmahiswara1/kopipi.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Kopipi (Landing Page kopi interaktif).",
    featured: true,
  },
  {
    slug: "gadangmahiswara-portfolio",
    title: "Gadang's Portfolio",
    category: "Portfolio",
    shortDesc:
      "Portfolio modern dengan Next.js 16, React 19, dan integrasi AI Google Gemini.",
    longDesc:
      "Website portfolio interaktif yang dibangun dengan teknologi web modern terbaru. Memiliki fitur elemen 3D interaktif menggunakan Three.js, animasi halus dengan Framer Motion dan GSAP, serta integrasi AI menggunakan Google Gemini. Sepenuhnya responsif dan dioptimalkan untuk performa.",
    challenge:
      "Membutuhkan portfolio yang tidak hanya menampilkan proyek tetapi juga memberikan pengalaman interaktif dan futuristik yang membedakan dari portfolio developer pada umumnya.",
    solution:
      "Mengimplementasikan elemen 3D dengan Three.js, animasi canggih dengan Framer Motion, dan chatbot AI dengan Google Gemini untuk memberikan pengalaman unik dan memorable bagi pengunjung.",
    features: [
      { icon: "Box", label: "Elemen 3D Interaktif", desc: "Visualisasi Three.js yang responsif" },
      { icon: "Sparkles", label: "AI Integration", desc: "Chatbot dengan Google Gemini" },
      { icon: "Zap", label: "Animasi Canggih", desc: "Framer Motion & GSAP transitions" },
      { icon: "Database", label: "Full Stack", desc: "Prisma ORM dengan Supabase" },
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Three.js", "Framer Motion", "Prisma", "Supabase", "Google Gemini AI"],
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://jmahiswara.my.id",
    sourceUrl: "https://github.com/jmahiswara1/gadangmahiswara-portfolio.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Portfolio website modern dengan AI.",
    featured: true,
  },
  {
    slug: "minexia-optimize",
    title: "Minexia Optimize",
    category: "AI",
    shortDesc:
      "Platform Mining Supply Chain Optimization berbasis AI untuk mengoptimalkan rantai pasok pertambangan.",
    longDesc:
      "Minexia Optimize adalah platform Mining Supply Chain Optimization berbasis AI yang dirancang untuk mengoptimalkan rantai pasok pertambangan secara end-to-end. Platform ini menganalisis data operasional pertambangan dan memberikan rekomendasi optimasi menggunakan algoritma machine learning.",
    challenge:
      "Industri pertambangan membutuhkan solusi digital yang dapat mengoptimalkan rantai pasok kompleks mereka dengan mempertimbangkan berbagai variabel operasional secara simultan.",
    solution:
      "Mengembangkan platform fullstack dengan Next.js di frontend dan Express.js di backend, terintegrasi dengan model AI untuk analisis prediktif dan rekomendasi optimasi rantai pasok.",
    features: [
      { icon: "Brain", label: "AI Optimization", desc: "Analisis prediktif rantai pasok" },
      { icon: "BarChart2", label: "Dashboard Analytics", desc: "Visualisasi data operasional real-time" },
      { icon: "Settings", label: "Parameter Tuning", desc: "Konfigurasi variabel optimasi" },
      { icon: "TrendingUp", label: "Forecasting", desc: "Prediksi kebutuhan supply chain" },
    ],
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://minexia-optimize.vercel.app/",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Minexia Optimize (AI Supply Chain).",
    featured: true,
  },
  {
    slug: "diary-food",
    title: "Diary Food",
    category: "AI",
    shortDesc:
      "Platform komunitas kuliner dengan fitur AI \"Ask AI\" untuk solusi memasak personal.",
    longDesc:
      "DiaryFood adalah platform komunitas kuliner berbasis web yang memungkinkan pengguna berbagi resep secara interaktif dan mendapatkan solusi memasak personal melalui fitur kecerdasan buatan \"Ask AI\". Platform ini menggabungkan aspek sosial berbagi resep dengan teknologi AI.",
    challenge:
      "Membuat platform komunitas kuliner yang tidak hanya menjadi tempat berbagi resep, tetapi juga memberikan pengalaman personal dengan bantuan AI untuk menjawab pertanyaan memasak.",
    solution:
      "Mengembangkan platform fullstack dengan fitur komunitas berbagi resep dan integrasi AI chatbot yang dapat memberikan saran memasak, substitusi bahan, dan tips kuliner secara personal.",
    features: [
      { icon: "ChefHat", label: "Recipe Sharing", desc: "Komunitas berbagi resep interaktif" },
      { icon: "MessageSquare", label: "Ask AI", desc: "Chatbot AI untuk solusi memasak" },
      { icon: "Users", label: "Community", desc: "Interaksi antar pengguna" },
      { icon: "Search", label: "Smart Search", desc: "Pencarian resep berbasis AI" },
    ],
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://diary-food1222.vercel.app/",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Diary Food (Platform kuliner + AI).",
    featured: true,
  },
  {
    slug: "pojok-foto",
    title: "Pojok Foto",
    category: "Landing Page",
    shortDesc:
      "Aplikasi Photo Booth berbasis web dengan desain Neobrutalis untuk mengambil foto langsung di browser.",
    longDesc:
      "Pojok Foto adalah aplikasi Photo Booth berbasis web dengan desain Neobrutalis yang memungkinkan pengguna mengambil foto, memilih frame, filter, dan stiker langsung di browser. Menggabungkan kreativitas desain dengan fungsionalitas kamera web.",
    challenge:
      "Membangun pengalaman photo booth yang biasanya memerlukan aplikasi native menjadi sepenuhnya berbasis web, dengan performa real-time dan UI yang menarik.",
    solution:
      "Memanfaatkan Web API kamera browser dan canvas manipulation untuk memproses foto secara real-time. Desain Neobrutalis memberikan identitas visual yang unik dan playful.",
    features: [
      { icon: "Camera", label: "Web Camera", desc: "Capture foto langsung dari browser" },
      { icon: "Frame", label: "Custom Frames", desc: "Pilihan frame dan border kreatif" },
      { icon: "Palette", label: "Filter & Stiker", desc: "Beragam filter dan stiker dekoratif" },
      { icon: "Download", label: "Instant Download", desc: "Unduh hasil foto langsung" },
    ],
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    thumbnail: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://pojok-foto.vercel.app/",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Pojok Foto (Photo Booth web).",
    featured: true,
  },
  {
    slug: "smart-pos-fullstack",
    title: "SmartPOS - Fullstack Point of Sale",
    category: "Dashboard",
    shortDesc:
      "Aplikasi kasir (POS) modern dengan manajemen inventaris, pelanggan, dan analitik real-time.",
    longDesc:
      "SmartPOS adalah aplikasi Point of Sale (POS) berbasis web yang dirancang untuk efisiensi operasional bisnis ritel. Sistem ini mencakup fitur manajemen produk, kategori, stok barang, serta pencatatan transaksi penjualan yang terintegrasi dengan laporan keuangan. Menggunakan NestJS untuk backend yang scalable dan React untuk frontend responsif.",
    challenge:
      "Bisnis ritel membutuhkan sistem POS yang modern, scalable, dan terintegrasi dengan analitik untuk pengambilan keputusan yang lebih baik.",
    solution:
      "Membangun aplikasi POS fullstack dengan NestJS backend, React frontend, dan Prisma ORM. Dashboard analitik visual memberikan insight bisnis real-time.",
    features: [
      { icon: "ShoppingCart", label: "Transaction Management", desc: "Pencatatan transaksi real-time" },
      { icon: "Package", label: "Inventory", desc: "Manajemen produk dan stok" },
      { icon: "BarChart2", label: "Analytics Dashboard", desc: "Laporan keuangan visual" },
      { icon: "Users", label: "Customer Management", desc: "Database pelanggan terintegrasi" },
    ],
    tech: ["NestJS", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Swagger"],
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop",
    ],
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa SmartPOS (Aplikasi kasir fullstack).",
    featured: true,
  },
  {
    slug: "apotek-landing-page",
    title: "Apotek Sehat Bahagia - Landing Page",
    category: "Landing Page",
    shortDesc:
      "Landing page modern untuk apotek dengan status buka/tutup realtime dan integrasi WhatsApp.",
    longDesc:
      "Landing page responsif yang dirancang untuk memodernisasi kehadiran digital apotek lokal. Dibangun menggunakan Astro untuk performa static site yang sangat cepat, dipadukan dengan React untuk komponen interaktif. Menampilkan Dynamic Status Indicator, WhatsApp Integration, dan Interactive Maps.",
    challenge:
      "Apotek lokal membutuhkan kehadiran digital yang modern untuk menjangkau lebih banyak pasien, dengan informasi status operasional yang akurat.",
    solution:
      "Menggunakan Astro untuk performa optimal dan React untuk komponen interaktif. Status buka/tutup otomatis berdasarkan jam operasional (08.00-21.00).",
    features: [
      { icon: "Clock", label: "Dynamic Status", desc: "Indikator buka/tutup otomatis sesuai jam" },
      { icon: "MessageCircle", label: "WhatsApp CTA", desc: "Tombol langsung ke chat apoteker" },
      { icon: "MapPin", label: "Interactive Maps", desc: "Embed Google Maps untuk navigasi" },
      { icon: "Heart", label: "Services Showcase", desc: "Layanan cek tensi dan tebus resep" },
    ],
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://sehat-bahagia-landing-page.netlify.app/",
    sourceUrl: "https://github.com/jmahiswara1/apotek-landing-page.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Landing Page apotek modern.",
    featured: false,
  },
  {
    slug: "intern-elms-api",
    title: "Intern ELMS API",
    category: "Dashboard",
    shortDesc:
      "RESTful backend API untuk manajemen pengajuan cuti karyawan dengan Clean Code Architecture.",
    longDesc:
      "ELMS API adalah sistem backend RESTful untuk mengelola pengajuan cuti karyawan secara terpusat. Dibangun menggunakan Laravel 11 dengan Service-Repository Pattern untuk menerapkan Clean Code Architecture, mendukung autentikasi token-based menggunakan Laravel Sanctum serta OAuth Google dan GitHub melalui Socialite.",
    challenge:
      "Perusahaan membutuhkan sistem terpusat untuk mengelola pengajuan cuti yang sebelumnya dilakukan secara manual.",
    solution:
      "Membangun RESTful API dengan Laravel 11 menggunakan arsitektur bersih (Service-Repository Pattern), dilengkapi RBAC dan OAuth integration.",
    features: [
      { icon: "FileText", label: "Leave Management", desc: "CRUD pengajuan cuti lengkap" },
      { icon: "Shield", label: "RBAC", desc: "Role-based access control" },
      { icon: "Key", label: "OAuth", desc: "Login via Google & GitHub" },
      { icon: "TestTube", label: "Auto Testing", desc: "Pengujian otomatis terintegrasi" },
    ],
    tech: ["Laravel", "PHP", "PostgreSQL", "Postman", "RBAC"],
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://documenter.getpostman.com/view/50579029/2sBXc8pP5D",
    sourceUrl: "https://github.com/jmahiswara1/intern-elms-api.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa ELMS API (Sistem manajemen cuti).",
    featured: false,
  },
  {
    slug: "pricing-landing-page-modern",
    title: "Pricing Landing Page",
    category: "Landing Page",
    shortDesc:
      "Landing page modern untuk showcase paket pembuatan website dengan pricing tiers dan animasi interaktif.",
    longDesc:
      "Website showcase profesional yang dirancang untuk mempromosikan layanan pembuatan website dengan tiga tier paket: Basic, Business, dan Pro. Dibangun menggunakan Next.js 16 dengan React 19 dan TypeScript untuk performa optimal dan type safety.",
    challenge:
      "Mempresentasikan paket harga layanan web development secara visual menarik agar calon klien mudah membandingkan dan memilih paket yang sesuai.",
    solution:
      "Mengembangkan landing page dengan Hero Section animasi gradient, Pricing Cards 3 tier, FAQ interaktif, dan CTA Banner untuk konversi. WhatsApp Integration untuk direct inquiry.",
    features: [
      { icon: "CreditCard", label: "Pricing Cards", desc: "3 tier paket (Rp 500k - Rp 1.500k)" },
      { icon: "HelpCircle", label: "Interactive FAQ", desc: "Accordion pertanyaan umum" },
      { icon: "MessageCircle", label: "WhatsApp CTA", desc: "Direct inquiry via WA" },
      { icon: "Sparkles", label: "Animations", desc: "Gradient dan micro-interactions" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://pricing-landing-page.netlify.app/",
    sourceUrl: "https://github.com/jmahiswara1/pricing-landing-page.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Pricing Landing Page.",
    featured: false,
  },
  {
    slug: "mailflow-api",
    title: "MailFlow API",
    category: "Dashboard",
    shortDesc:
      "Backend layanan email marketing canggih dengan queue system, tracking pixel, dan analisis campaign.",
    longDesc:
      "MailFlow API adalah solusi backend yang dirancang untuk menangani pengiriman email massal (bulk email) dengan keandalan tinggi. Dibangun menggunakan arsitektur Producer-Consumer dengan Redis dan Bull untuk manajemen antrian tugas. Dilengkapi fitur Advanced Analytics, Smart Delivery, dan Campaign Management.",
    challenge:
      "Server email tradisional mengalami blocking saat mengirim ribuan email. Dibutuhkan sistem yang mampu mengirim email massal tanpa mempengaruhi performa server utama.",
    solution:
      "Mengimplementasikan arsitektur Producer-Consumer dengan Redis dan Bull queue. Dilengkapi rate limiting, auto-retry, tracking pixel, dan click tracking.",
    features: [
      { icon: "Mail", label: "Bulk Email", desc: "Kirim ribuan email tanpa blocking" },
      { icon: "BarChart2", label: "Advanced Analytics", desc: "Open & click tracking real-time" },
      { icon: "RefreshCw", label: "Auto-Retry", desc: "Mekanisme retry otomatis" },
      { icon: "FileSpreadsheet", label: "CSV Export", desc: "Ekspor log pengiriman" },
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Bull", "Resend API"],
    thumbnail: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=750&fit=crop",
    ],
    sourceUrl: "https://github.com/jmahiswara1/mail-flow-api.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa MailFlow API (Email marketing backend).",
    featured: false,
  },
  {
    slug: "intern-pos-api",
    title: "Intern POS API",
    category: "Dashboard",
    shortDesc:
      "REST API backend untuk sistem Point of Sale dengan autentikasi JWT dan transaksi.",
    longDesc:
      "POS API adalah backend system berbasis REST API yang dirancang untuk mendukung aplikasi Point of Sale. Menyediakan fitur autentikasi berbasis JWT, manajemen produk, serta pencatatan transaksi penjualan. Dibangun dengan arsitektur modular menggunakan NestJS.",
    challenge:
      "Diperlukan backend API yang modular dan scalable untuk mendukung operasional POS dengan keamanan autentikasi yang baik.",
    solution:
      "Membangun RESTful API dengan NestJS menggunakan arsitektur modular, terintegrasi PostgreSQL dan TypeORM, dilengkapi JWT auth dan pengujian E2E.",
    features: [
      { icon: "Key", label: "JWT Auth", desc: "Autentikasi token-based aman" },
      { icon: "Package", label: "Product CRUD", desc: "Manajemen produk lengkap" },
      { icon: "Receipt", label: "Transactions", desc: "Pencatatan penjualan" },
      { icon: "TestTube", label: "E2E Testing", desc: "Pengujian end-to-end dengan Jest" },
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Supabase", "Postman", "Jest"],
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://documenter.getpostman.com/view/50579029/2sBXc8pP9d",
    sourceUrl: "https://github.com/jmahiswara1/intern-pos-api.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa POS API backend.",
    featured: false,
  },
  {
    slug: "apotek-sehat-bahagia",
    title: "Apotek Sehat Bahagia",
    category: "Company Profile",
    shortDesc:
      "Landing Page Apotek Sehat Bahagia Mulia dengan desain modern.",
    longDesc:
      "Landing Page Apotek Sehat Bahagia Mulia yang dirancang untuk memodernisasi kehadiran digital apotek. Website ini menampilkan informasi layanan, profil apotek, dan integrasi kontak langsung.",
    challenge:
      "Apotek membutuhkan website sederhana namun profesional untuk meningkatkan kredibilitas dan menjangkau pelanggan secara digital.",
    solution:
      "Mengembangkan landing page responsif dengan Next.js, React, dan Tailwind CSS yang menampilkan informasi lengkap apotek.",
    features: [
      { icon: "Building", label: "Company Profile", desc: "Informasi lengkap apotek" },
      { icon: "Phone", label: "Contact Integration", desc: "Mudah dihubungi pelanggan" },
      { icon: "Layout", label: "Responsive", desc: "Tampilan optimal di semua device" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://sehat-bahagia.vercel.app/",
    sourceUrl: "https://github.com/jmahiswara1/apotek-sehat-bahagia.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Company Profile apotek.",
    featured: false,
  },
  {
    slug: "ortuszero",
    title: "OrtusZero",
    category: "Landing Page",
    shortDesc:
      "Landing page e-commerce untuk brand sepatu olahraga OrtusZero.",
    longDesc:
      "Website ini adalah landing page e-commerce untuk brand sepatu olahraga OrtusZero yang dibuat sebagai proyek mata kuliah. Menampilkan katalog produk sepatu dengan desain modern dan navigasi yang intuitif.",
    challenge:
      "Membuat landing page e-commerce yang menarik dan fungsional untuk brand sepatu olahraga sebagai pembelajaran web development dasar.",
    solution:
      "Membangun landing page dengan HTML, CSS, dan JavaScript murni, menerapkan prinsip desain responsif dan arsitektur layout modern.",
    features: [
      { icon: "ShoppingBag", label: "Product Showcase", desc: "Katalog sepatu dengan tampilan grid" },
      { icon: "Smartphone", label: "Responsive", desc: "Optimal di semua ukuran layar" },
      { icon: "Navigation", label: "Smooth Navigation", desc: "Navigasi intuitif antar section" },
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://ortuszero-landing-page.vercel.app/",
    sourceUrl: "https://github.com/jmahiswara1/ortuszero-landing-page.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Landing Page e-commerce.",
    featured: false,
  },
  {
    slug: "bookshelf-api",
    title: "Bookshelf API",
    category: "Academic",
    shortDesc:
      "API back-end untuk manajemen buku (CRUD) dengan fitur filter pencarian.",
    longDesc:
      "API back-end untuk manajemen buku dengan operasi CRUD lengkap dan fitur filter pencarian. Dibuat sebagai submission kelas Back-End Pemula di Dicoding. Mengimplementasikan RESTful API best practices.",
    challenge:
      "Mempelajari dan mengimplementasikan RESTful API yang mengikuti standar Dicoding untuk manajemen data buku.",
    solution:
      "Membangun API RESTful dengan Node.js dan Hapi framework, dilengkapi validasi input, filter pencarian, dan dokumentasi lengkap.",
    features: [
      { icon: "BookOpen", label: "Book CRUD", desc: "Create, Read, Update, Delete buku" },
      { icon: "Search", label: "Filter & Search", desc: "Pencarian buku dengan filter" },
      { icon: "FileText", label: "API Docs", desc: "Dokumentasi endpoint lengkap" },
    ],
    tech: ["Node.js", "Hapi", "JavaScript"],
    thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://gd-bookshelf-api.vercel.app/docs",
    sourceUrl: "https://github.com/jmahiswara1/bookshelf-api.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Bookshelf API.",
    featured: false,
  },
  {
    slug: "portfolio-old-version",
    title: "Portfolio Old Version",
    category: "Portfolio",
    shortDesc:
      "Versi pendahulu dari website portofolio (v1) dengan fokus animasi interaktif halus.",
    longDesc:
      "Versi pendahulu dari website portofolio ini (v1). Proyek ini dibangun sebagai eksplorasi awal dalam pengembangan web modern, menampilkan showcase proyek dan kemampuan teknis dengan fokus pada animasi interaktif yang halus menggunakan Framer Motion.",
    challenge:
      "Membuat portfolio pertama yang dapat menampilkan kemampuan teknis secara visual menarik.",
    solution:
      "Membangun portfolio dengan React, Next.js, dan Framer Motion untuk animasi interaktif yang halus.",
    features: [
      { icon: "Layout", label: "Project Showcase", desc: "Tampilan proyek dengan animasi" },
      { icon: "Palette", label: "Modern Design", desc: "Desain kontemporer dan clean" },
      { icon: "Zap", label: "Smooth Animations", desc: "Transisi halus Framer Motion" },
    ],
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
    thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=750&fit=crop",
    ],
    demoUrl: "https://jmahiswara.vercel.app/",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Portfolio website.",
    featured: false,
  },
  {
    slug: "story-app",
    title: "Story App",
    category: "Academic",
    shortDesc:
      "Aplikasi SPA berbasis web untuk berbagi cerita dengan fitur geolokasi dan push notification.",
    longDesc:
      "Story App adalah aplikasi Single Page Application (SPA) berbasis web untuk berbagi cerita dengan fitur geolokasi dan notifikasi push. Dibangun sebagai proyek pembelajaran untuk memahami konsep PWA dan Web API modern.",
    challenge:
      "Mengimplementasikan SPA dengan fitur-fitur modern seperti geolokasi, push notification, dan offline capability.",
    solution:
      "Membangun aplikasi web dengan Laravel sebagai framework dasar, mengimplementasikan geolokasi untuk penandaan lokasi cerita dan push notification untuk engagement pengguna.",
    features: [
      { icon: "MapPin", label: "Geolocation", desc: "Penandaan lokasi cerita" },
      { icon: "Bell", label: "Push Notification", desc: "Notifikasi real-time" },
      { icon: "Globe", label: "SPA", desc: "Single Page Application" },
    ],
    tech: ["Laravel", "PHP"],
    thumbnail: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&h=750&fit=crop",
    ],
    sourceUrl: "https://github.com/jmahiswara1/story-app.git",
    waMessage: "Halo Gadang, saya tertarik pesan proyek serupa Story App.",
    featured: false,
  },
];
