import { useState } from "react";

interface OptionsProps {
    opacity: number;
}

export default function Options({ opacity }: OptionsProps) {
    const op = Math.min(Math.max(opacity, 0), 100) / 100;
    const [hoverDev, setHoverDev] = useState(false);
    const [hoverUser, setHoverUser] = useState(false);

    const handleClick = () => {
        console.log("Button clicked");
    };

    const buttonBaseStyle = {
        position: 'relative' as const,
        padding: '20px',
        background: 'transparent',
        // outline: 'none',
        // cursor: 'pointer',
        // overflow: 'visible'
    };

    const svgStyle = {
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        position: 'absolute' as const,
        // pointerEvents: 'none' as const
    };

    return (
        <section
            style={{
                opacity: op,
                transition: 'opacity 0.5s ease-out'
            }}
            className="w-full min-h-screen flex items-center justify-center max-h-screen"
        >
            <div className="flex items-center space-x-4 gap-10">
                <button className="text-6xl font-bold"
                    style={{
                        ...buttonBaseStyle,
                    }}
                    onMouseEnter={() => setHoverDev(true)}
                    onMouseLeave={() => setHoverDev(false)}
                    onClick={handleClick}
                >
                    <svg style={svgStyle}>
                        <rect
                            width="100%"
                            height="100%"
                            rx="20"
                            ry="20"
                            style={{
                                fill: 'none',
                                stroke: '#fff',
                                strokeDasharray: hoverDev ? '15, 310' : '400, 0',
                                strokeDashoffset: hoverDev ? 100 : 40,
                                transition: 'all 1.35s cubic-bezier(0.15, 1, 0.22, 1)'
                            }}
                        />
                    </svg>
                    Dev. Exp.
                </button>


                <button
                    className="text-6xl font-bold"
                    style={{
                        ...buttonBaseStyle,
                    }}
                    onMouseEnter={() => setHoverUser(true)}
                    onMouseLeave={() => setHoverUser(false)}
                    onClick={handleClick}
                >
                    <svg style={svgStyle}>
                        <rect
                            width="100%"
                            height="100%"
                            rx="20"
                            ry="20"
                            style={{
                                fill: 'none',
                                stroke: '#fff',
                                strokeDasharray: hoverUser ? '15, 310' : '400, 0',
                                strokeDashoffset: hoverUser ? 100 : 40,
                                transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)'
                            }}
                        />
                    </svg>
                    User Exp.
                </button>
            </div>
        </section>
    );
}