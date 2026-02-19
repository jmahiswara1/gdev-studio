"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!ref.current) return;

            const element = ref.current;
            let x = 0;
            let y = 0;

            if (direction === "up") y = 50;
            if (direction === "left") x = -50;
            if (direction === "right") x = 50;

            gsap.fromTo(
                element,
                {
                    autoAlpha: 0,
                    y: y,
                    x: x,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%", // Reveal when top of element hits 80% viewport height
                        toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
                    },
                }
            );
        },
        { scope: ref }
    );

    return (
        <div ref={ref} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}
