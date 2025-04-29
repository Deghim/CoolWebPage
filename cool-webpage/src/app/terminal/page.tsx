"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import PixelBack from "../pixelBackground/pixelBackground";


export default function Terminal() {
    const [showAnimation, setShowAnimation] = useState(true)
    const [gatillo, setGatillo] = useState(false);

    useEffect(() => {
        setGatillo(!false)
        setTimeout(() => {
            setTimeout(() => {
                setShowAnimation(false)
            }, 1000)

        }, 500)

    }, []);


    return (
        <>
            {showAnimation &&
                <div className="fixed inset-0 z-10" >
                    <PixelBack gatillo={!gatillo} />
                </div>

            }
            <p>Hola mama</p>
           <Link href={"/"}>
           <button >Soy un boton</button>
           </Link>
        </>
    )
}