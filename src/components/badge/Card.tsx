'use client'

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'
import { CuboidCollider, RigidBody, useSphericalJoint } from '@react-three/rapier'

interface CardProps {
    dragged: THREE.Vector3 | null
    drag: (v: THREE.Vector3 | null) => void
    joint: any
}

export function Card({ dragged, drag, joint }: CardProps) {
    const card = useRef<any>(null)
    const [front, back] = useTexture(['/card-front.jpg', '/card-back.jpg'])

    // --- KONFIGURASI UKURAN (Rasio 1080x1500) ---
    // Skala diperbesar 2.5x dari ukuran dasar
    const scale = 2.5
    const cardWidth = 1.08 * scale   // 2.7
    const cardHeight = 1.50 * scale  // 3.75
    const cardThickness = 0.05       // Ketebalan kartu
    const borderRadius = 0.12        // Tingkat rounded sudut

    useEffect(() => {
        if (front) {
            front.anisotropy = 16
            front.minFilter = THREE.LinearMipmapLinearFilter
            front.generateMipmaps = true
        }
    }, [front])

    const vec = new THREE.Vector3()
    const ang = new THREE.Vector3()
    const rot = new THREE.Vector3()
    const dir = new THREE.Vector3()

    // Anchor disesuaikan dengan tinggi kartu yang baru agar pengait tetap di atas
    useSphericalJoint(joint, card, [[0, 0, 0], [0, cardHeight / 2 + 0.1, 0]])

    useFrame((state) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
                ;[card, joint].forEach((ref: any) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            })
        }

        if (card.current) {
            ang.copy(card.current.angvel())
            rot.copy(card.current.rotation())
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true)
        }
    })

    return (
        <RigidBody
            position={[0, -2.5, 0]}
            ref={card}
            angularDamping={2}
            linearDamping={2}
            type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
            {/* Collider disesuaikan dengan ukuran kartu baru */}
            <CuboidCollider args={[cardWidth / 2, cardHeight / 2, cardThickness / 2]} />

            {/* --- BAGIAN INTERAKTIF & VISUAL --- */}
            <group
                onPointerDown={(e) => {
                    e.stopPropagation()
                    // Memulai interaksi drag
                    if (card.current) {
                        const cardPos = new THREE.Vector3().copy(card.current.translation())
                        drag(new THREE.Vector3().copy(e.point).sub(cardPos))
                    }
                }}
                onPointerUp={(e) => {
                    e.stopPropagation()
                    drag(null)
                }}
            >
                {/* Sisi Depan (Rounded & Mengkilap) */}
                <mesh position={[0, 0, cardThickness / 2]}>
                    <RoundedBox args={[cardWidth, cardHeight, cardThickness]} radius={borderRadius} smoothness={4}>
                        <meshPhysicalMaterial
                            map={front}
                            side={THREE.FrontSide}
                            toneMapped={false}
                            roughness={0.05}
                            metalness={0.1}
                            clearcoat={1}
                            clearcoatRoughness={0}
                            ior={1.5}
                        />
                    </RoundedBox>
                </mesh>

                {/* Sisi Belakang (Rounded) */}
                <mesh position={[0, 0, -cardThickness / 2]} rotation={[0, Math.PI, 0]}>
                    <RoundedBox args={[cardWidth, cardHeight, cardThickness]} radius={borderRadius} smoothness={4}>
                        <meshBasicMaterial map={back} side={THREE.FrontSide} toneMapped={false} />
                    </RoundedBox>
                </mesh>
            </group>

            {/* Visual Pengait (Disesuaikan posisinya di atas kartu baru) */}
            <mesh position={[0, cardHeight / 2 + 0.05, 0]}>
                <boxGeometry args={[0.5, 0.15, 0.15]} />
                <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
            </mesh>
        </RigidBody>
    )
}