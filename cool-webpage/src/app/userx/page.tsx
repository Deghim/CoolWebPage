"use client";
import { useEffect, useState } from "react"
import PixelBack from "../pixelBackground/pixelBackground"
import Link from "next/link";

export default function UserX() {
    const [showAnimation, setShowAnimation] = useState(true);
    const [gatillo, setGatillo] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setGatillo(!gatillo);
            setTimeout(() => {
                setShowAnimation(false);
            }, 1000)
        }, 500)
    }, []);

    return (
        <div className=" relative">
            {showAnimation && (
                <div className=" fixed inset-0 z-10">
                    <PixelBack gatillo={!gatillo} />

                </div>
            )}
            <section className=" relative w-full min-h-screen">
                <p
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        margin: 0,          // reset default margins
                        fontSize: '15vw',     // 1/5 of viewport width
                        fontWeight: 'bold',
                        lineHeight: '1',        // tighten up the vertical spacing
                    }}
                >Jorge U.</p>
            </section>
            <section className=" relative w-full min-h-screen">
                <Link href={"/"}>
                    <button>regresar al home</button>
                </Link>

            </section>
        </div>
    )
}