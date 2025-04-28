interface OptionsProps {
    opacity: number;
}

export default function Options({ opacity }: OptionsProps) {
    const op = Math.min(Math.max(opacity, 0), 100) / 100
    return (
        <section style={{
            opacity: op,
            transition: 'opacity 0.5s ease-out'
        }} className="w-full min-h-screen flex items-center justify-center max-h-screen">
            <div className="flex items space-x-4 gap-10">
                <p className="text-6xl font-bold" >Dev. Exp.</p>
                <p className="text-6xl font-bold">User Exp.</p>

            </div>
        </section>
    )
}