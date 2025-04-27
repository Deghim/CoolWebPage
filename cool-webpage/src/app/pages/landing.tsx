"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function Landing() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const upddateProgress = () => {
            const scrollY: number = window.scrollY;
            const viewPortH: number = window.innerHeight;

            const raw: number = (scrollY / viewPortH) * 100;
            const pct: number = Math.min(Math.max(raw, 0), 100);

            setScrollProgress(Math.round(pct));
        };

        window.addEventListener("scroll", upddateProgress, { passive: true });
        upddateProgress();
    });

    return (
        <>

            <section className="w-full min-h-screen flex items-center justify-center max-h-screen">
                <div className="flex items-center space-x-4 gap-2">
                    <p className="text-6xl font-bold ">Hi,</p>
                    <span className="bg-yellow-300 dark:bg-red-600">
                        <TypeAnimation
                            sequence={[
                                "user!", 2000,
                                "developer!", 2000,
                                "mom!", 2000
                            ]}
                            wrapper="span"
                            speed={10}
                            className="text-6xl font-bold"
                            repeat={Infinity}
                        />
                    </span>
                </div>
            <div>{scrollProgress}%</div>
            </section>
            <section className="w-full min-h-screen flex items-center justify-center max-h-screen">
                <div className="flex items space-x-4 gap-10">
                    <p className="text-6xl font-bold" >Dev. Exp.</p>
                    <p className="text-6xl font-bold">User Exp.</p>

                </div>
            </section>
        </>
    );
}
