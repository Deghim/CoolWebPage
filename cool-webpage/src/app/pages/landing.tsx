"use client";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {


    return (
        <section className=" relative w-full min-h-screen flex flex-col items-center justify-center">
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
        </section>
    );
}
