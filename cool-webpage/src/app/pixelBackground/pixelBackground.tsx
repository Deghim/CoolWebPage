'use client';
import { CSSProperties } from "react";
import { motion } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: (i: number) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.01 * i }
    }),
    closed: (i: number) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.01 * i }
    })
}
function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
export default function PixelBack({ gatillo }: { gatillo: boolean }) {

    const pixelBackground: CSSProperties = {
        display: 'flex',
        height: '100vh',
        overflow: "hidden",
    }
    const column: CSSProperties = {
        width: "5vw",
        height: "100%"
    }
    const block: CSSProperties = {
        height: '5vw',
        width: '100%',
        backgroundColor: "orange"
    }

    const getBlocks = () => {
        const blockSize = window.innerWidth * 0.05
        const amountOfBlocks = Math.ceil(window.innerHeight / blockSize)
        const delays = shuffleArray([...Array(amountOfBlocks)].map((_, i) => i));
        return delays.map((randomDelay, i) => {
            return (
                <motion.div
                    variants={anim}
                    initial="initial"
                    animate={gatillo ? "open" : "closed"}
                    custom={randomDelay}
                    key={i}
                    style={block}></motion.div>
            )
        })
    }

    return (
        <div style={pixelBackground}>
            {
                [...Array(20)].map((_, i) => {
                    return <div key={i} style={column}>
                        {getBlocks()}
                    </div>
                })
            }
        </div>

    )
}