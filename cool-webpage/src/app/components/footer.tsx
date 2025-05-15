'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TheFooter() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
            if (footerRef.current) console.log("Se wacha")
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        if (footerRef.current) observer.observe(footerRef.current)

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current)
            }
        }

    }, []);

    return (
        <footer ref={footerRef} style={{
            height: '5vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5vw',
            padding: '0',
            margin: '0'

        }}>
            <Link href={"/"} style={{
                height: '100%',
                minWidth: '200px',
                width: '20vw',
                maxWidth: '400px',
                display: 'flex',
                borderTop: '2px solid currentColor',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold'
            }}>
                <div>
                    {/* {isVisible && (<TypeAnimation sequence={['Go Back... ', 1000]} />)} */}
                    Go Back...
                </div>
            </Link>
            <div style={{
                height: '100%',
                width:"100%",
                display: 'flex',
                borderTop: '2px solid currentColor',
                alignItems: 'center',
                fontWeight: 'bold'
            }}>
                {isVisible && (<TypeAnimation sequence={[
                    `or don't`, 1500,
                    `or go home`, 1500,
                    `u gotta click "Go Back..." to go back`, 1500,
                    `lol`, 1000,
                ]}
                    repeat={Infinity} />)}
            </div>
        </footer>
    );
}
