"use client";
import Link from "next/link";
import { CSSProperties, useState } from "react";

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

    const buttonBaseStyle: CSSProperties = {
        position: "relative",
        padding: "20px",
        background: "transparent",
        outline: "none",
        cursor: "pointer",
        overflow: "visible",
    };

    const svgStyle: CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
    };

    return (
        <section
            style={{
                opacity: op,
                transition: 'opacity 0.5s ease-out'
            }}
            className="w-full min-h-screen flex items-center justify-center"
        >
            <div className="flex items-center space-x-4 gap-10">
                <Link href={"/terminal"}>
                    <button className="text-6xl font-bold"
                        style={{
                            ...buttonBaseStyle,
                        }}
                        onMouseEnter={() => setHoverDev(true)}
                        onMouseLeave={() => setHoverDev(false)}
                    >
                        <svg style={svgStyle}>
                            <rect
                                width="100%"
                                height="100%"
                                rx="10"
                                ry="10"
                                style={{
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '4',
                                    strokeDasharray: hoverDev ? '400 0' : '20 320',
                                    strokeDashoffset: hoverDev ? 40 : 100,
                                    transition: 'all 1.35s cubic-bezier(0.15, 1, 0.22, 1)'
                                }}
                            />
                        </svg>
                        Dev. Exp.
                    </button>
                </Link>
                <Link href={"/userx"}>
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
                                rx="10"
                                ry="10"
                                style={{
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: '4',
                                    strokeDasharray: hoverUser ? '400 0' : '20 320',
                                    strokeDashoffset: hoverUser ? 40 : 100,
                                    transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)'
                                }}
                            />
                        </svg>
                        User Exp.
                    </button>
                </Link>
            </div>
        </section >
    );
}