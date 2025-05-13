"use client";
import { useEffect, useState } from "react"
import PixelBack from "../pixelBackground/pixelBackground"
import Carousel from "./carousel";
// import TheFooter from "./components/footer";

export default function UserX() {
    const [showAnimation, setShowAnimation] = useState(true);
    const [afterShowAnimation, setAfterShowAnimation] = useState(false);
    const [gatillo, setGatillo] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAfterShowAnimation(true);
        }, 250)

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
            <div style={{
                opacity: `${afterShowAnimation ? 1 : 0}`
            }}>
                <section className=" relative w-full min-h-screen">
                    <p className="absolute bottom-5 left-5 m-0 font-bold leading-none text-[15vw]">
                        Jorge U.
                    </p>
                </section>
                <Carousel />
            </div>
            {/* <TheFooter/> */}
        </div >
    )
}