"use client";

import Link from "next/link";

export default function Carousel() {


    return (
        <section className="w-full min-h-screen flex items-center justify-center"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "0.5rem"
            }}>
            <div className="flex items-center space-x-4 gap-10"
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <Link href={'/'}>
                    <div style={{ width: '30%' }}>hi mom</div>
                </Link>
                <div
                    style={{
                        width: '70%',
                        height: '100%'
                    }}>
                    <div className=" border-2 w-4 " style={{ margin: '10px' }}></div>
                    <div className=" border-2 w-4" style={{ margin: '10px' }}></div>
                    <div className=" border-2 w-4" style={{ margin: '10px' }}></div>
                    <div className=" border-2 w-4" style={{ margin: '10px' }}></div>
                    <div className=" border-2 w-4" style={{ margin: '10px' }}></div>
                </div>
            </div>
        </section>
    )
}


/*
    *  whois      - Who is Jorge?",
    *  videos     - Visit YouTube channel",
    *  projects   - Visit GitHub",
    *  social     - Display social networks",
    *  secret     - Password required",
 */