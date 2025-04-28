'use client';
import { CSSProperties, useEffect, useState, JSX } from "react";
import { motion } from 'framer-motion';

const anim = {
    initial: { opacity: 0 },
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
    const [blocks, setBlocks] = useState<JSX.Element[][]>([]);

    useEffect(() => {
        const generateBlocks = () => {
            const blockSize = window.innerWidth * 0.05;
            const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);

            const columnBlocks = [];

            for (let col = 0; col < 20; col++) {
                const delays = shuffleArray([...Array(amountOfBlocks)].map((_, i) => i));
                const columnElements = delays.map((randomDelay, i) => {
                    return (
                        <motion.div
                            variants={anim}
                            initial="initial"
                            animate={gatillo ? "open" : "closed"}
                            custom={randomDelay}
                            key={i}
                            style={block}
                        ></motion.div>
                    );
                });
                columnBlocks.push(columnElements);
            }

            setBlocks(columnBlocks);
        };

        generateBlocks();
        window.addEventListener('resize', generateBlocks);

        return () => window.removeEventListener('resize', generateBlocks);
    }, [gatillo]);

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

    return (
        <div style={pixelBackground}>
            {blocks.map((columnBlocks, i) => (
                <div key={i} style={column}>
                    {columnBlocks}
                </div>
            ))}
        </div>
    );
}