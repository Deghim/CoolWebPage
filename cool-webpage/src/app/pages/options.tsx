import { useState } from "react";

interface OptionsProps {
    opacity: number;
}

export default function Options({ opacity }: OptionsProps) {
    const op = Math.min(Math.max(opacity, 0), 100) / 100
    const [hoverDev,  setHoverDev ] = useState(false);
    const [hoverUser, setHoverUser] = useState(false);

    const juan  = ()=>{
        console.log("hola mama")
    }

    return (
        <section style={{
            opacity: op,
            transition: 'opacity 0.5s ease-out'
        }} className="w-full min-h-screen flex items-center justify-center max-h-screen">
            <div className="flex items space-x-4 gap-10">
                <button className="text-6xl font-bold border-2" style={{
                    borderRadius: '20px',
                    border: hoverDev ? "4px solid " : "4px solid transparent",
                    padding: '25px',
                    transition:    "border 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    
                }}
                onMouseEnter={() => setHoverDev(true)}
                onMouseLeave={() => setHoverDev(false)}
                onClick={juan}
                >Dev. Exp.</button>
                <button className="text-6xl font-bold"
                style={{
                    borderRadius: '20px',
                    border: hoverUser ? "4px solid " : "4px solid transparent",
                    padding: '25px',
                    transition:    "border 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={() => setHoverUser(true)}
                onMouseLeave={() => setHoverUser(false)}
                >User Exp.</button>

            </div>
        </section>
    )
}