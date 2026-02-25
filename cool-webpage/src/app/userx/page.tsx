"use client";
// import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation";
// import PixelBack from "../pixelBackground/pixelBackground"
import Carousel from "./carousel";
// import TheFooter from "../components/footer";

export default function UserX() {
    // const [showAnimation, setShowAnimation] = useState(true);
    // const [afterShowAnimation, setAfterShowAnimation] = useState(false);
    // const [gatillo, setGatillo] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setAfterShowAnimation(true);
    //     }, 250)

    //     setTimeout(() => {
    //         setGatillo(!gatillo);
    //         setTimeout(() => {
    //             setShowAnimation(false);
    //         }, 1000)
    //     }, 500)
    // }, []);
    return (
        <div className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
            <section className=" relative w-full h-screen snap-start">
                <TypeAnimation sequence={[
                    "Jorge U.", 1000,
                    "Le George.", 1000,
                    "El Yorch.", 1000,
                    "...!", 2000,
                ]}
                    className="absolute bottom-5 left-5 m-0 font-bold leading-none text-[15vw]"
                    wrapper="span"
                    speed={20}
                    repeat={Infinity} />
            </section>
            <section className="h-screen snap-start">
                <Carousel />
            </section>

            {/* <TheFooter /> */}

        </div >
    )
}