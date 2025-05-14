'use client';
import React, { useEffect, useState } from 'react';

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
        setHighlightIndexes(
            bulletPoints.map(pts =>
                pts.length > 1
                    ? Math.floor(Math.random() * pts.length)
                    : Math.random() > 0.5
                        ? 0
                        : -1
            )
        );
    }, [bulletPoints]);

    // 1) Base: always has the pseudo-element, positioning, & transition.
    const linkBase = [
        'relative',
        'pb-1',
        // pseudo-element setup:
        "after:content-['']",
        'after:absolute',
        'after:left-0',
        'after:bottom-0',
        'after:h-[2px]',
        'after:w-full',
        'after:bg-current',
        // 🔑 keep the transition on every state:
        'after:transition-transform',
        'after:duration-300',
    ].join(' ');

    // 2) When active: full width, grow from left
    const activeLink = ['after:scale-x-100', 'after:origin-left'].join(' ');

    // 3) When inactive: zero width, shrink from right
    const inactiveLink = ['after:scale-x-0', 'after:origin-right'].join(' ');

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
                                    <li
                                        key={ii}

                                    >
                                        <span className={`${linkBase} ${isActive ? activeLink : inactiveLink
                                            } mb-1`}
                                        >

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
