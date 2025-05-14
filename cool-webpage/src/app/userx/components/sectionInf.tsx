'use client';
import React, { CSSProperties, useEffect, useState } from 'react';

interface SectionInformationProps {
    information: string;
    bulletTitle: string[];
    bulletPoints: string[][];
}

export default function SectionInformation({
    information,
    bulletTitle,
    bulletPoints,
}: SectionInformationProps) {
    const [highlightIndexes, setHighlightIndexes] = useState<number[]>([]);

    useEffect(() => {
        setHighlightIndexes(bulletPoints.map(pts => pts.length > 1 ? Math.floor(Math.random() * pts.length) : Math.random() > 0.5 ? 0 : -1));
    }, [bulletPoints]);

    const underlineBaseStyle: CSSProperties = {
        display: 'inline',
        width: 'calc(100%)',
        backgroundImage: 'linear-gradient(transparent calc(100% - 2px), currentColor 2px)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '0% 100%',
        transition: 'background-size 0.5s',
        padding: '0 0 1px 0',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
    };

    const activeStyle = { backgroundSize: '100% 100%', };

    const inactiveStyle = { backgroundSize: '0% 100%', };

    return (
        <div className="h-[90vh]">
            <div className="prose max-w-none mt-24 pr-20">{information}</div>
            <div className="grid gap-4 p-4 auto-rows-auto grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
                {bulletPoints.map((pts, i) => (
                    <div key={i}>
                        <h2 className="mt-8 mb-8 text-lg font-bold">{bulletTitle[i]}</h2>
                        <ul className="ml-6 list-disc list-inside">
                            {pts.map((item, ii) => {
                                const isActive = ii === highlightIndexes[i];
                                return (
                                    <li key={ii} className="mb-2 relative">
                                        <span
                                            style={{
                                                ...underlineBaseStyle,
                                                ...(isActive ? activeStyle : inactiveStyle),
                                            }}>
                                            {item}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}