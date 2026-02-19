'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Band } from './Band'
import './utils' // Register MeshLine
import { Environment, Preload, useTexture } from '@react-three/drei'

// Preload textures to avoid flicker/context loss on refresh
useTexture.preload(['/card-front.jpg', '/card-back.jpg'])

interface BadgeProps {
    className?: string
}

export default function Badge({ className }: BadgeProps) {
    return (
        <div className={`w-full h-full ${className || 'fixed inset-0 z-0'}`}>
            {/* Use pointer-events-none on container, but enable on Canvas via CSS if needed, 
           allows clicking through to content behind, but here we likely want interaction with the badge.
           Actually the user likely wants this as a background or interactive element. 
           We'll make the canvas interactive.
       */}
            <Canvas
                camera={{ position: [0, 0, 13], fov: 25 }} // Reverted zoom
                style={{ background: 'transparent' }}
                dpr={[1, 2]} // Fix blurriness on high DPI screens
                gl={{
                    preserveDrawingBuffer: true,
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                onCreated={({ gl }) => {
                    gl.domElement.addEventListener('webglcontextlost', (e) => {
                        e.preventDefault()
                        console.warn('WebGL Context Lost - will attempt recovery')
                    }, false)
                    gl.domElement.addEventListener('webglcontextrestored', () => {
                        console.log('WebGL Context Restored')
                    }, false)
                }}
            >
                <ambientLight intensity={Math.PI * 0.5} />
                <Environment preset="city" />
                <Preload all />
                <Suspense fallback={null}>
                    <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                        <Band />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}
