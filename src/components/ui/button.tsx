'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
    external?: boolean
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'default', size, href, external, children, disabled, ...props }, ref) => {
        const localRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
        const overlayRef = useRef<HTMLSpanElement>(null)
        const textRef = useRef<HTMLSpanElement>(null)

        // Combine refs (local and forwarded)
        React.useImperativeHandle(ref, () => localRef.current!)

        // Determine overlay and text colors based on variant for adaptive contrast
        const getVariantStyles = React.useCallback(() => {
            switch (variant) {
                case 'default':
                    return {
                        overlay: 'bg-neutral-500',
                        text: 'hover:text-white'
                    }
                case 'destructive':
                    return {
                        overlay: 'bg-neutral-500',
                        text: 'hover:text-white'
                    }
                case 'outline':
                case 'secondary':
                case 'ghost':
                case 'link':
                    return {
                        overlay: 'bg-neutral-500',
                        text: 'hover:text-black dark:hover:text-white'
                    }
                default:
                    return {
                        overlay: 'bg-neutral-500',
                        text: 'hover:text-white'
                    }
            }
        }, [variant])

        const { overlay, text } = getVariantStyles()

        // Use a ref-based setup to avoid stale closures and ensure each instance is independent
        const setupRef = useRef(false)

        React.useEffect(() => {
            const overlayEl = overlayRef.current
            const element = localRef.current
            if (!overlayEl || !element) return

            // Prevent double-setup
            if (setupRef.current) return
            setupRef.current = true

            // Initial setup - overlay covers nothing
            gsap.set(overlayEl, {
                clipPath: 'circle(0% at 50% 50%)',
                opacity: 1,
            })

            const getLocalCoordinates = (e: MouseEvent) => {
                const rect = element.getBoundingClientRect()
                return {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                }
            }

            const handleMouseEnter = (e: MouseEvent) => {
                const { x, y } = getLocalCoordinates(e)

                // Kill any ongoing animation on this specific overlay
                gsap.killTweensOf(overlayEl)

                // Set initial position at cursor
                gsap.set(overlayEl, {
                    clipPath: `circle(0% at ${x}px ${y}px)`,
                })

                // Animate to full coverage — slower, smoother
                gsap.to(overlayEl, {
                    clipPath: `circle(150% at ${x}px ${y}px)`,
                    duration: 0.7,
                    ease: 'power2.out',
                })
            }

            const handleMouseLeave = (e: MouseEvent) => {
                const { x, y } = getLocalCoordinates(e)

                // Kill any ongoing animation on this specific overlay
                gsap.killTweensOf(overlayEl)

                // Animate out shrinking to the exit point — slower
                gsap.to(overlayEl, {
                    clipPath: `circle(0% at ${x}px ${y}px)`,
                    duration: 0.5,
                    ease: 'power2.in',
                })
            }

            element.addEventListener('mouseenter', handleMouseEnter as EventListener)
            element.addEventListener('mouseleave', handleMouseLeave as EventListener)

            return () => {
                setupRef.current = false
                element.removeEventListener('mouseenter', handleMouseEnter as EventListener)
                element.removeEventListener('mouseleave', handleMouseLeave as EventListener)
                gsap.killTweensOf(overlayEl)
            }
        }, [])

        const content = (
            <>
                {/* Adaptive overlay that fills on hover — stays behind text */}
                <span
                    ref={overlayRef}
                    className={cn("absolute inset-0 z-0 pointer-events-none", overlay)}
                />

                {/* Text content - strictly above overlay, adaptive color */}
                <span ref={textRef} className={cn("relative z-10 flex items-center gap-2 pointer-events-none transition-colors duration-300", text)}>
                    {children}
                </span>
            </>
        )

        // Merge base button classes
        const classes = cn(
            buttonVariants({ variant, size, className }),
            'relative overflow-hidden group'
        )

        // Handle Link/Anchor rendering
        if (href && !disabled) {
            if (external) {
                return (
                    <a
                        href={href}
                        className={classes}
                        ref={localRef as React.Ref<HTMLAnchorElement>}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    >
                        {content}
                    </a>
                )
            }
            return (
                <Link
                    href={href}
                    className={classes}
                    ref={localRef as React.Ref<HTMLAnchorElement>}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {content}
                </Link>
            )
        }

        // Default Button rendering
        return (
            <button
                ref={localRef as React.Ref<HTMLButtonElement>}
                className={classes}
                disabled={disabled}
                {...props}
            >
                {content}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
