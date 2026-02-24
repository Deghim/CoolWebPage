'use client';
import { useEffect, useRef, useState } from "react";
import PixelBack from "./pixelBackground/pixelBackground";
import UserX from "./userx/page";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [afterShowAnimation, setAfterShowAnimation] = useState(false)
  const [gatillo, setGatillo] = useState(false);
  const effectRan = useRef(false);
  // const [progreView, setProgreView] = useState(0);

  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true
    // const updateProgre = () => {
    //   const scrollY: number = window.scrollY
    //   const viewPortH: number = window.innerHeight

    //   const raw: number = (scrollY / viewPortH) * 100
    //   const pct: number = Math.min(Math.max(raw, 0), 100);

    //   setProgreView(pct)
    // }

    // window.addEventListener("scroll", updateProgre, { passive: true })
    // updateProgre()
    console.log("Landing")
    const tAfterShow = setTimeout(() => setAfterShowAnimation(true), 250)
    const tGatillo = setTimeout(() => setGatillo((gatillo) => !gatillo), 500)
    const tHideOverlay = setTimeout(() => setShowAnimation(false), 1500)
    // return () => window.removeEventListener("scroll", updateProgre)
    return () => {
      clearTimeout(tAfterShow)
      clearTimeout(tGatillo)
      clearTimeout(tHideOverlay)
    }
  }, []);

  return (
    <div className="relative" >
      {showAnimation && (<div className="fixed inset-0 z-10">
        <PixelBack gatillo={!gatillo} />
      </div>)}
      {/* <div style={{ opacity: `${afterShowAnimation ? 1 : 0}` }}>
        <div style={{ position: 'fixed', bottom: `${progreView}%`, left: '50%', transform: 'translateX(-50%)', fontSize: '1rem', fontWeight: 'bold', opacity: progreView >= 100 ? 0 : 100, transition: 'opacity 0.5s ease', }}>
          {Math.round(progreView)}%
        </div>
        <Landing />
        <Options opacity={progreView >= 100 ? 100 : 0} />
      </div> */}
      <div className={` transition-opacity duration-300 ease-in-out will-change-opacity ${afterShowAnimation ? "opacity-100" : "opacity-0"}`}>
        <UserX />
      </div>
    </div>
  );
}