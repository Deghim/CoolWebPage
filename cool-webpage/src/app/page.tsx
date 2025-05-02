'use client';
import Landing from "./landing/landing";
import Options from "./options/options";
import { useEffect, useState } from "react";
import PixelBack from "./pixelBackground/pixelBackground";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [afterShowAnimation, setAfterShowAnimation] = useState(false)
  const [gatillo, setGatillo] = useState(false);
  const [progreView, setProgreView] = useState(0);

  useEffect(() => {
    const updateProgre = () => {
      const scrollY: number = window.scrollY
      const viewPortH: number = window.innerHeight

      const raw: number = (scrollY / viewPortH) * 100
      const pct: number = Math.min(Math.max(raw, 0), 100);

      setProgreView(pct)
    }

    window.addEventListener("scroll", updateProgre, { passive: true })
    updateProgre()
    setTimeout(() => {
      setAfterShowAnimation(true)
    }, 250)

    setTimeout(() => {
      setGatillo(!gatillo);
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000)
    }, 500)
    return () => window.removeEventListener("scroll", updateProgre)
  }, []);

  return (
    <div className="relative" >
      {showAnimation && (<div className="fixed inset-0 z-10">
        <PixelBack gatillo={!gatillo} />
      </div>)}
      <div style={{ opacity: `${afterShowAnimation ? 1 : 0}` }}>
        <div style={{ position: 'fixed', bottom: `${progreView}%`, left: '50%', transform: 'translateX(-50%)', fontSize: '1rem', fontWeight: 'bold', opacity: progreView >= 100 ? 0 : 100, transition: 'opacity 0.5s ease', }}>
          {Math.round(progreView)}%
        </div>
        <Landing />
        <Options opacity={progreView >= 100 ? 100 : 0} />
      </div>
    </div>
  );
}