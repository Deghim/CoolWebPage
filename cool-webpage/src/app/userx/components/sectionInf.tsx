'use client';
import React, { CSSProperties, useEffect, useState } from 'react';

interface SectionInformationProps {
    information: string;
    bulletTitle: string[];
    bulletPoints: string[][];
    bulletLinks?: (string | undefined)[][];
}

export default function SectionInformation({
    information,
    bulletTitle,
    bulletPoints,
    bulletLinks
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
        // <div className="h-screen pt-19 pr-5 overflow-auto snap-y snap-mandatory scroll-smooth">
        <div className="h-screen pt-19 pr-5 overflow-auto">
            <div className="text-justify break-words">{information}</div>
            <div className={`grid auto-rows-auto grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]`}>
                {bulletPoints.map((pts, i) => (
                    <div key={i}>
                        <h2 className=" mt-8 mb-2 text-lg font-bold">{bulletTitle[i]}</h2>
                        <ul className="ml-3 list-disc list-inside">
                            {pts.map((item, ii) => {
                                const isActive = ii === highlightIndexes[i];
                                const style = { ...underlineBaseStyle, ...(isActive ? activeStyle : inactiveStyle), };
                                const url = bulletLinks?.[i][ii];
                                return (
                                    <li key={ii} className="mb-2 relative">
                                        {url ? (
                                            <a href={url} style={style} target='_blank'>{item}</a>
                                        ) : (
                                            <span style={style}>{item}</span>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div >
    );
}