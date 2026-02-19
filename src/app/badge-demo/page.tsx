import Badge from '@/components/badge/Badge'

export default function BadgeDemoPage() {
    return (
        <div className="w-full h-screen bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">3D Badge Demo</h1>
                <p className="text-neutral-600 dark:text-neutral-400">Drag the card to interact. Switch theme to see band color change.</p>
            </div>
            <Badge />
        </div>
    )
}
