"use client";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {


    return (
        <section className=" relative w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-4 gap-2">
                <p className="text-6xl font-bold ">Hi,</p>
                <span >
                    <TypeAnimation
                        sequence={[
                            "user!", 1500,
                            "developer!", 1500,
                            "mom!", 1500,
                            "&$!#%!", 1500
                        ]}
                        wrapper="span"
                        speed={10}
                        className="text-6xl font-bold"
                        repeat={Infinity}
                    />
                </span>
            </div>
        </section>
    );
}
