'use client';

import { useEffect, useRef, useState } from "react";

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
        <footer ref={footerRef}
        style={{
            height:'5vh',
            display:'flex',
            borderTop:'2px solid currentColor',
            justifyContent:'center',
            alignItems:'center'
            }}>
            hola mama
            {isVisible && <p>I am now in view!</p>}
        </footer>
    );
}
