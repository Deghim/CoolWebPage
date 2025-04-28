'use client';
import Landing from "./pages/landing";
import Options from "./pages/options";
import { useEffect, useState } from "react";

export default function Home() {
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

    return () => window.removeEventListener("scroll", updateProgre)
  }, []);

  return (
    <div className="relative" >
      <div style={{ position: 'fixed', bottom: `${progreView}%` , left: '50%', transform: 'translateX(-50%)', fontSize: '1rem', fontWeight: 'bold', opacity: progreView >= 100 ? 0 : 100, transition: 'opacity 0.5s ease', }}>
        {Math.round(progreView)}%
      </div>
      <Landing />
      <Options opacity={progreView >= 100 ? 100 : 0} />
    </div>
  );
}