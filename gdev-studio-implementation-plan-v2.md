# GDev Studio — Implementation Plan v2.0

> For AI Agent: Antigravity | Next.js 14 · TypeScript · Tailwind · GSAP · Framer Motion

---

## 1. IDENTITY & CONCEPT

**Brand:** GDev Studio — Jasa koding profesional oleh mahasiswa TI berprestasi.
**Owner:** Gadang Jatu Mahiswara — Informatics Engineering, Fullstack Developer.
**Visual Tone:** Monokrom editorial brutal (hitam, putih, abu-abu), tipografi dominan, layout asimetris dengan overlap dan doodle accent, dark mode futuristik. Referensi UI: gambar `creatiwise-reference.jpg` — clean white/black contrast, sticky navbar, tilt cards proses, bento grid proyek.
**Accent Color:** `#63b3ed` (biru elektrik) — hanya untuk CTA, terminal, badge teknis.
**Logo:** `logo-dark.png` (dark mode) / `logo-light.png` (light mode) — switch via `useTheme`.
**Language:** Bilingual EN / ID — toggle di navbar, simpan ke `localStorage`, gunakan `lib/i18n/` (flat JSON, bukan library berat).

---

## 2. TECH STACK

| Layer        | Technology                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------- |
| Framework    | Next.js 14 (App Router, TypeScript)                                                         |
| Styling      | Tailwind CSS + CSS Variables                                                                |
| Components   | shadcn/ui                                                                                   |
| Animation    | GSAP + ScrollTrigger, Framer Motion, Lenis                                                  |
| Theme Toggle | `@magicui/animated-theme-toggler` (`npx shadcn@latest add @magicui/animated-theme-toggler`) |
| AI Chatbot   | Gemini API via `/api/chat` (Next.js API Route, streaming)                                   |
| Icons        | Lucide React + Phosphor Icons                                                               |
| Data         | Hardcoded `lib/data/*.ts` — no CMS, no DB (fase awal)                                       |
| Images       | Unsplash (sementara), logo dari `/public/logo-*.png`                                        |
| Deploy       | Vercel (API Routes = serverless functions otomatis)                                         |

/_ ============================================
FONT — Revised to match reference
============================================
Display/Heading : Playfair Display 700/900
(bold serif, tight tracking)
Sub-heading : DM Sans 600 / Inter 600
Body : DM Sans 400 / Inter 400
Label/Tag : DM Sans 500 (bukan mono)
============================================ _/

/_ Google Fonts import _/
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

/_ Tailwind config _/
fontFamily: {
display: ['Playfair Display', 'serif'], // heading H1, H2
sans: ['DM Sans', 'sans-serif'], // body, label, nav
mono: ['Space Mono', 'monospace'], // terminal only (hero)
} |

**Serverless:** Gunakan Next.js API Routes saja (`/api/chat`, `/api/contact`). Tidak perlu backend terpisah. Tidak perlu DB untuk fase ini — jika nanti butuh simpan inquiry, tambah **Supabase** (PostgreSQL, free tier).

---

## 3. SITE STRUCTURE

```
app/
├── page.tsx                  → / (Home)
├── services/page.tsx         → /services
├── projects/
│   ├── page.tsx              → /projects (grid + filter)
│   └── [slug]/page.tsx       → /projects/[slug] (detail + checkout ke WA)
├── pricing/page.tsx          → /pricing
├── about/page.tsx            → /about
├── contact/page.tsx          → /contact
└── api/
    ├── chat/route.ts         → Gemini streaming endpoint
    └── contact/route.ts      → (opsional) notif email

components/
├── layout/  → Navbar, Footer, FloatingFAB (gabungan WA+AI)
├── home/    → Hero, Services, WhyUs, HowItWorks, TechStack,
│              ProjectsBento, Pricing, Testimonials, FAQ, CTABanner
├── projects/ → ProjectCard (expandable+magnetic), ProjectDetail, RelatedProjects
├── services/ → ServiceCard (expandable+magnetic)
├── about/   → AboutHero, Timeline, SkillsGrid, Values
└── ui/      → Button, Tag, Badge, Terminal, Chatbot, LanguageToggle

lib/
├── data/
│   ├── projects.ts    → Array proyek (slug, title, desc, longDesc, tech, images, category, demoUrl, waMessage)
│   ├── services.ts    → Array layanan (title, desc, features[], price, duration, waMessage)
│   └── testimonials.ts
└── i18n/
    ├── en.json        → Semua string bahasa Inggris
    └── id.json        → Semua string bahasa Indonesia
```

---

## 4. DATA: `lib/data/projects.ts`
  
```typescript
export interface Project {
  slug: string;
  title: string;
  category:
    | "Landing Page"
    | "Dashboard"
    | "Company Profile"
    | "Portfolio"
    | "Academic"
    | "AI";
  shortDesc: string;
  longDesc: string; // paragraf panjang untuk detail page
  challenge: string; // tantangan yang diselesaikan
  solution: string; // solusi yang diterapkan
  features: { icon: string; label: string; desc: string }[];
  tech: string[]; // badge teknologi
  thumbnail: string; // Unsplash URL (landscape 800x500)
  images: string[]; // galeri (desktop + mobile mockup)
  demoUrl?: string; // live demo link
  waMessage: string; // pre-filled WA message untuk "Pesan Serupa"
  featured: boolean; // tampil di home bento
}

export const projects: Project[] = [
  {
    slug: "dashboard-analytics",
    title: "Analytics Dashboard",
    category: "Dashboard",
    shortDesc: "Real-time analytics dashboard untuk monitoring bisnis.",
    longDesc: "Dashboard komprehensif dengan visualisasi data real-time...",
    challenge:
      "Klien membutuhkan visibilitas data penjualan lintas platform...",
    solution:
      "Membangun dashboard dengan chart interaktif dan filter dinamis...",
    features: [
      {
        icon: "BarChart2",
        label: "Real-time Charts",
        desc: "Update otomatis setiap 30 detik",
      },
      {
        icon: "Filter",
        label: "Dynamic Filters",
        desc: "Filter by date, category, region",
      },
    ],
    tech: ["Next.js", "TypeScript", "Recharts", "Supabase", "Tailwind"],
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    ],
    demoUrl: "https://demo.example.com",
    waMessage:
      "Halo Gadang, saya tertarik pesan proyek serupa Analytics Dashboard.",
    featured: true,
  },
  // ... 5 proyek lainnya dengan struktur sama
];
```

---

## 5. PAGES & SECTIONS

### `/` — Home (12 sections berurutan)

1. **Navbar** — glassmorphism, scroll progress bar, `logo-dark/light.png`, language toggle (EN/ID), `@magicui/animated-theme-toggler`
2. **Hero** — Terminal typewriter + headline bold word-stagger + stats counter + 2 CTA button (GSAP interactive)
3. **Services** — 6 card expandable + magnetic hover (lihat §6)
4. **WhyUs** — 3 pilar: Clean Code · UI/UX Focus · Modern Tech
5. **HowItWorks** — 5-step tilt cards seperti referensi (Define→Design→Build→Test→Launch), SVG connector line draw on scroll
6. **TechStack** — Magnetic icon pills 16 teknologi
7. **ProjectsBento** — Interactive hover links (`npx shadcn@latest add https://21st.dev/r/hurerag24/interactive-hover-links`) untuk 6 proyek featured
8. **Pricing** — 5 tier card, 1 featured pulse glow
9. **Testimonials** — Infinite marquee horizontal
10. **FAQ** — Accordion 7 pertanyaan
11. **CTABanner** — Full-width bold headline + 2 tombol GSAP
12. **Footer** — Logo + links + socials

### `/services`

Card grid dengan **expandable card** per layanan: collapsed = nama + ikon + harga mulai. Expanded (klik/hover) = deskripsi panjang + features list + estimasi waktu + tombol "Pesan via WA" (GSAP height animation). Magnetic effect pada setiap card.

### `/projects`

Filter kategori (All, Landing Page, Dashboard, Company Profile, Portfolio, Academic, AI). Grid card dengan **expandable card** — hover reveal overlay, magnetic pull. Klik card → navigasi ke `/projects/[slug]`.

### `/projects/[slug]` — Detail + Checkout ke WA

- **Header:** nama + kategori badge + tech chips
- **Hero image** fullwidth dengan parallax scroll (GSAP scrub)
- **Deskripsi:** longDesc, challenge, solution — 3 kolom alternating
- **Features list:** icon + label + desc, stagger fade kiri ke kanan
- **Galeri:** grid screenshot desktop + mobile
- **Checkout section** (mirip checkout page, tapi direct ke WA):
  ```
  ┌─────────────────────────────────┐
  │  Tertarik dengan proyek ini?    │
  │  Pesan versi kustommu sekarang  │
  │                                 │
  │  [input: Nama]                  │
  │  [input: Kebutuhan singkat]     │
  │  [select: Budget range]         │
  │                                 │
  │  [Hubungi via WhatsApp →]       │
  │  (redirect ke WA dengan pesan   │
  │   pre-filled dari form input)   │
  └─────────────────────────────────┘
  ```
- **Related Projects:** 3 proyek (same category)

### `/pricing`

Tabel perbandingan 5 tier. Flow pembayaran (DP 50% → Pengerjaan → Revisi → Pelunasan → Deploy). FAQ harga. CTA WA.

### `/about`

- **Hero:** foto (Unsplash avatar sementara) + nama Gadang Jatu Mahiswara + title Fullstack Developer
- **Bio:** Background Teknik Informatika — baca dari `Resume_Gadang Jatu Mahiswara.pdf` yang akan diberikan untuk mengisi konten nyata
- **Skills Grid:** tech bubbles dengan level bar
- **Timeline:** pendidikan + pencapaian (dari resume)
- **Values:** Clean Code · On Time · Transparent · Confidential
- **CTA:** ke /projects + WA

### `/contact`

Form: Nama, Email, Jenis Layanan (select), Pesan. Submit → POST `/api/contact` → redirect WA dengan pesan terangkai.

---

## 6. UI COMPONENTS DETAIL

### Expandable Card (Services + Projects)

```
State: collapsed / expanded
Collapsed: card 200px height, nama + ikon + harga
Expanded: full height dengan AnimatePresence (Framer Motion layout animation)
Magnetic: GSAP x/y translate ±20px tracking mouse dalam radius 80px card
Hover border: radial gradient glow dari posisi mouse (CSS --mx --my vars)
```

### Floating FAB (FloatingFAB)

```
Default: 1 tombol bulat gabungan (ikon chat+wa)
Klik: expand dengan spring animation → 2 tombol terpisah
  - WA: bottom-right, green accent
  - AI Chat: bottom-right+offset, blue accent
Framer Motion: staggerChildren untuk split animation
Panel chatbot: slide-up + scale spring, Gemini streaming
```

### Interactive Project Links (Home Bento)

```
Gunakan: npx shadcn@latest add https://21st.dev/r/hurerag24/interactive-hover-links
Tampilan: list proyek dengan hover image reveal
Wrap dengan section heading "// Selected Projects"
```

### GSAP Interactive Buttons

```
Semua tombol primer/sekunder:
- onMouseEnter: GSAP scale(1.05) + slight skewX
- onMouseLeave: spring kembali elastic.out(1, 0.3)
- onClick: quick scale(0.95) → scale(1)
- Cursor follower (opsional): dot mengikuti cursor global
```

### Language Toggle (LanguageToggle)

```
Posisi: navbar kanan sebelum theme toggle
UI: pill dengan "EN | ID", active side highlighted
State: Context + localStorage persist
Implementasi: `lib/i18n/useTranslation.ts` hook
```

---

## 7. ANIMATIONS PER COMPONENT

| Component               | Animation                                                      | Library              |
| ----------------------- | -------------------------------------------------------------- | -------------------- |
| Navbar                  | Stagger fade mount, blur intensify scroll, progress bar scaleX | GSAP                 |
| Hero terminal           | Typewriter per baris                                           | GSAP TextPlugin      |
| Hero headline           | Word-by-word stagger reveal                                    | GSAP SplitText       |
| Hero stats              | Count-up on viewport enter                                     | GSAP                 |
| All sections            | opacity 0→1 + y 40→0 on scroll, once:true                      | GSAP ScrollTrigger   |
| HowItWorks cards        | Tilt + stagger delay index\*150ms, SVG stroke-dashoffset draw  | GSAP ScrollTrigger   |
| TechStack pills         | Magnetic x/y translate ±60px, elastic spring back              | GSAP                 |
| Services/Projects cards | Expandable height, layout animation                            | Framer Motion        |
| Services/Projects cards | Magnetic border glow                                           | GSAP                 |
| ProjectsBento           | Interactive hover links (21st.dev component)                   | Built-in             |
| Portfolio hero          | Parallax scrub                                                 | GSAP ScrollTrigger   |
| Features list           | Stagger fade left→right                                        | GSAP ScrollTrigger   |
| Pricing featured        | Pulse glow CSS keyframe                                        | CSS                  |
| Pricing cards           | scale(1.02) hover                                              | Framer Motion        |
| Testimonials            | Infinite marquee pause-on-hover                                | CSS animation        |
| FAB expand              | Spring split animation, staggerChildren                        | Framer Motion        |
| Theme toggle            | `@magicui/animated-theme-toggler` (built-in)                   | MagicUI              |
| Page transitions        | AnimatePresence fade+slide                                     | Framer Motion        |
| All CTA buttons         | GSAP hover scale/skew + click press                            | GSAP                 |
| Checkout form           | Focus ring GSAP, submit shake-if-error                         | GSAP + Framer Motion |

---

## 8. COLOR PALETTE & TYPOGRAPHY

/_ ============================================
COLOR PALETTE — Revised to match reference
============================================ _/

:root {
/_ Light mode (dominan di referensi) _/
--bg: #ffffff; /_ pure white, bukan off-white _/
--bg-secondary: #f7f7f7; /_ section alt background, sangat subtle _/
--surface: #ffffff; /_ card background _/
--surface2: #f2f2f2; /_ card inner, tag background _/
--border: #e2e2e2; /_ border tipis, bukan rgba _/
--text: #0a0a0a; /_ hampir hitam pekat _/
--text-secondary: #3d3d3d; /_ sub-heading, deskripsi _/
--text-muted: #8a8a8a; /_ placeholder, caption _/
--text-inverse: #ffffff; /_ text di atas dark section _/

/_ Section-level dark (bukan full dark mode) _/
--dark-section-bg: #0a0a0a; /_ hero stat, services, CTA _/
--dark-section-text: #ffffff;
--dark-section-muted: #a0a0a0;

/_ Accent — MONOKROM, tidak ada biru _/
--accent: #0a0a0a; /_ CTA button = hitam _/
--accent-hover: #2a2a2a; /_ button hover = abu gelap _/
--accent-text: #ffffff; /_ text di atas accent button _/

/_ Tag/Pill _/
--tag-bg: #f0f0f0;
--tag-border: #d8d8d8;
--tag-text: #3d3d3d;

/_ Shadow _/
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
--shadow-card: 0 2px 8px rgba(0,0,0,0.05), 0 0 0 1px #e2e2e2;
}

[data-theme="dark"] {
/_ Dark mode (jika toggle diaktifkan) _/
--bg: #0a0a0a;
--bg-secondary: #111111;
--surface: #161616;
--surface2: #1e1e1e;
--border: #2a2a2a;
--text: #f0f0f0;
--text-secondary: #b0b0b0;
--text-muted: #666666;
--text-inverse: #0a0a0a;

--dark-section-bg: #000000;
--dark-section-text: #ffffff;

--accent: #ffffff; /_ button jadi putih di dark mode _/
--accent-hover: #e0e0e0;
--accent-text: #0a0a0a;

--tag-bg: #1e1e1e;
--tag-border: #2a2a2a;
--tag-text: #b0b0b0;

--shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
--shadow-md: 0 4px 16px rgba(0,0,0,0.4);
--shadow-card: 0 2px 8px rgba(0,0,0,0.3), 0 0 0 1px #2a2a2a;
}

/_ ============================================
FONT — Revised to match reference
============================================
Display/Heading : Playfair Display 700/900
(bold serif, tight tracking)
Sub-heading : DM Sans 600 / Inter 600
Body : DM Sans 400 / Inter 400
Label/Tag : DM Sans 500 (bukan mono)
============================================ _/

/_ Google Fonts import _/
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

/_ Tailwind config _/
fontFamily: {
display: ['Playfair Display', 'serif'], // heading H1, H2
sans: ['DM Sans', 'sans-serif'], // body, label, nav
mono: ['Space Mono', 'monospace'], // terminal only (hero)
}

---

## 9. INTEGRATIONS

| Item       | Value                                                         |
| ---------- | ------------------------------------------------------------- |
| WhatsApp   | `6281216312645` (pre-filled message dari context)             |
| Portfolio  | `jmahiswara.my.id`                                            |
| Instagram  | `@j.mahiswara_`                                               |
| GitHub     | `jmahiswara1`                                                 |
| Gemini API | Key via env `GEMINI_API_KEY`, endpoint `/api/chat`, streaming |
| Logo dark  | `/public/logo-dark.png`                                       |
| Logo light | `/public/logo-light.png`                                      |

---

## 10. GLOBAL RULES

1. Animasi hanya `transform` dan `opacity` — tidak ada `width/height/top/left` animation
2. Tidak ada emoji di UI — gunakan Lucide / Phosphor icons only
3. Semua warna via CSS variables — tidak ada hardcode hex di komponen
4. Setiap section = komponen terpisah di folder masing-masing
5. Semua data di `lib/data/*.ts` — tidak hardcode di JSX
6. Mobile-first, breakpoint utama `md (768px)` dan `lg (1024px)`
7. GSAP ScrollTrigger: `markers: false` production, `once: true` untuk reveal
8. Lenis init di `app/layout.tsx` root
9. GSAP untuk scroll/complex/button, Framer Motion untuk komponen/micro-interaction — tidak duplikasi
10. `lib/i18n/` untuk semua string UI — tidak ada teks hardcode di komponen
11. Gemini API key hanya di server (`/api/chat`) — tidak pernah exposed ke client
12. Images: gunakan Unsplash URL valid, logo dari `/public/`
13. Semi Heavy Animations
