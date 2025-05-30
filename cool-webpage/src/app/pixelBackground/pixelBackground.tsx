'use client';
import { CSSProperties, useEffect, useState, JSX } from "react";
import { motion } from 'framer-motion';
import React from "react";

const anim = {
    initial: { opacity: 1 },
    open: (i: number) => ({ opacity: 1, transition: { duration: 0, delay: 0.01 * i } }),
    closed: (i: number) => ({ opacity: 0, transition: { duration: 0, delay: 0.01 * i } }),
};

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function PixelBack({ gatillo }: { gatillo: boolean }) {
    const [blocks, setBlocks] = useState<JSX.Element[][]>([]);

    useEffect(() => {
        const generateBlocks = () => {
            const blockSize = window.innerWidth * 0.025;
            const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);

            const columnBlocks: JSX.Element[][] = [];
            const NUM_COLUMNS = 40;

            for (let col = 0; col < NUM_COLUMNS; col++) {
                const delays = shuffleArray([...Array(amountOfBlocks)].map((_, i) => i));
                const columnElements = delays.map((randomDelay, i) => (
                    <motion.div
                        variants={anim}
                        initial="initial"
                        animate={gatillo ? "open" : "closed"}
                        custom={randomDelay}
                        key={i}
                        style={blockStyle}
                    />
                ));
                columnBlocks.push(columnElements);
            }

            setBlocks(columnBlocks);
        };

        generateBlocks();
        window.addEventListener('resize', generateBlocks);
        return () => window.removeEventListener('resize', generateBlocks);
        // ESLint ignore
    }, [gatillo]);

    const pixelBackground: CSSProperties = {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
    };

    const columnStyle: CSSProperties = {
        width: '2.5vw',
        height: '100%',
    };

    const blockStyle: CSSProperties = {
        width: '100%',
        height: '2.5vw',
        backgroundColor: 'var(--background)',
    };

    return (
        <div style={pixelBackground}>
            {blocks.map((columnBlocks, i) => (
                <div key={i} style={columnStyle}>
                    {columnBlocks}
                </div>
            ))}
        </div>
    );
}

export default React.memo(PixelBack)