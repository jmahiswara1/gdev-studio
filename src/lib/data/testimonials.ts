export interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    content: string;
    rating: number;
    project: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Lukito Juwono",
        role: "Owner, Apotek Sehat Bahagia",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        content: "Website apotek kami jadi terlihat sangat profesional. Fitur status buka/tutup otomatis dan integrasi WhatsApp benar-benar membantu operasional harian kami.",
        rating: 5,
        project: "apotek-landing-page",
    },
    {
        name: "Gadang Mahiswara",
        role: "Founder, Kopipi Coffee",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        content: "Desain website Kopipi benar-benar menangkap esensi kedai kopi kami. Fitur Coffee Matchmaker menjadi favorit pelanggan kami. Animasinya sangat halus!",
        rating: 5,
        project: "kopipi",
    },
    {
        name: "Gadang Mahiswara",
        role: "Project Manager, Mining Corp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        content: "Platform Minexia Optimize sangat membantu tim kami mengoptimalkan supply chain. Dashboard analitiknya intuitif dan AI-nya memberikan insight yang valuable.",
        rating: 5,
        project: "minexia-optimize",
    },
    {
        name: "Gadang Mahiswara",
        role: "HR Manager",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        content: "ELMS API yang dibangun Gadang sangat mempermudah proses pengajuan cuti di perusahaan kami. Clean architecture-nya membuat maintenance jadi mudah.",
        rating: 5,
        project: "intern-elms-api",
    },
    {
        name: "Gadang Mahiswara",
        role: "Retail Business Owner",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        content: "SmartPOS mengubah cara kami mengelola toko. Dari kasir manual sekarang semuanya digital. Fitur analitiknya membantu kami mengambil keputusan bisnis yang lebih baik.",
        rating: 5,
        project: "smart-pos-fullstack",
    },
    {
        name: "Gadang Mahiswara",
        role: "Food Blogger",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        content: "DiaryFood adalah platform impian bagi komunitas kuliner. Fitur Ask AI benar-benar game changer untuk mendapatkan saran memasak yang personal.",
        rating: 5,
        project: "diary-food",
    },
    {
        name: "Gadang Mahiswara",
        role: "Startup CTO",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        content: "Kualitas kode Gadang sangat baik. API yang dia bangun well-documented, scalable, dan production-ready. Sangat recommend untuk proyek backend!",
        rating: 5,
        project: "mailflow-api",
    },
    {
        name: "Gadang Mahiswara",
        role: "Event Organizer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        content: "Pojok Foto menjadi hit di setiap event kami! Photo booth berbasis web yang kreatif dan mudah digunakan. Desain Neobrutalis-nya sangat eye-catching.",
        rating: 5,
        project: "pojok-foto",
    },
];
