'use client';
import Landing from "./pages/landing";
import Options from "./pages/options";
import { useEffect, useState } from "react";

export default function Home() {
  const [progreView, setProgreView] = useState(0);
  
  useEffect(() => {
    setProgreView(0);
  }, []);
  
  return (
    <div className="relative min-h-screen">
      <div 
        style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        {progreView}%
      </div>
      <Landing />
      <Options />
    </div>
  );
}