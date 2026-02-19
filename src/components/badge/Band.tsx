'use client'

import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { BallCollider, RigidBody, useRopeJoint } from '@react-three/rapier'
import { useTheme } from 'next-themes'
import { Card } from './Card'

export function Band() {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Handle hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    const band = useRef<any>(null)
    const bandOutline = useRef<any>(null)
    const fixed = useRef<any>(null)
    const j1 = useRef<any>(null)
    const j2 = useRef<any>(null)
    const j3 = useRef<any>(null)

    // Canvas size
    const { width, height } = useThree((state) => state.size)

    // A Catmull-Rom curve
    const [curve] = useState(() => new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
    ]))

    const [dragged, drag] = useState<THREE.Vector3 | null>(null)

    // Rope joints
    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])

    useFrame((state, delta) => {
        if (fixed.current && j1.current && j2.current && j3.current) {
            // Calculate catmul curve
            // @ts-ignore
            curve.points[0].copy(j3.current.translation())
            // @ts-ignore
            curve.points[1].copy(j2.current.translation())
            // @ts-ignore
            curve.points[2].copy(j1.current.translation())
            // @ts-ignore
            curve.points[3].copy(fixed.current.translation())

            const points = curve.getPoints(25)
            if (band.current) {
                // @ts-ignore
                band.current.geometry.setPoints(points)
            }
            if (bandOutline.current) {
                // @ts-ignore
                bandOutline.current.geometry.setPoints(points)
            }
        }
    })

    // Determine actual theme
    const currentTheme = theme === 'system' ? systemTheme : theme
    const isDark = currentTheme === 'dark'

    // Band color: White in dark mode, Black in light mode
    const bandColor = isDark ? 'white' : '#1a1a1a'
    const outlineColor = isDark ? '#333' : '#ccc'

    // Prevent Context Lost by not rendering until we have valid canvas size
    if (width === 0 || height === 0) {
        return null
    }

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} angularDamping={2} linearDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} angularDamping={2} linearDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} angularDamping={2} linearDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>

                {/* The Card Component attached to the last joint (j3) */}
                <Card
                    dragged={dragged}
                    drag={drag}
                    joint={j3}
                />
            </group>

            {/* The visual rope */}
            {/* Outline (White List) - rendered behind or same depth with larger width */}
            <mesh ref={bandOutline}>
                <meshLineGeometry />
                <meshLineMaterial
                    transparent
                    opacity={1}
                    color={outlineColor}
                    depthTest={false}
                    resolution={[width, height] as [number, number]}
                    lineWidth={1} // Slightly wider for outline effect
                />
            </mesh>

            {/* Inner Strap */}
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    transparent
                    opacity={1}
                    color={bandColor}
                    depthTest={false}
                    resolution={[width, height] as [number, number]}
                    lineWidth={1}
                />
            </mesh>
        </>
    )
}
