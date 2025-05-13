'use client';
import React, { CSSProperties, useEffect, useState } from 'react';

interface SectionInformationProps {
    information: string;
    bulletTitle: string[];
    bulletPoints: string[][];
}

export default function SectionInformation({ information, bulletTitle, bulletPoints }: SectionInformationProps) {
    const [highlightIndexes, setHighlightIndexes] = useState<number[]>([]);

    useEffect(() => {
        setHighlightIndexes(
            bulletPoints.map(pts => pts.length > 1 ? Math.floor(Math.random() * pts.length) : Math.random() > 0.5 ? 0 : -1)
        );
    }, [bulletPoints]);


    const infoStyle: CSSProperties = {
        textAlign: 'justify',
        marginTop: '6rem',
        paddingRight: '5rem'
    };

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
        padding: '1rem'
    };

    const titleStyle: CSSProperties = {
        marginTop: '2rem',
        marginBottom: '2rem',
        fontSize: '1.125rem',
        fontWeight: 'bold'
    };

    const listStyle: CSSProperties = {
        marginLeft: '1.5rem',
        listStyleType: 'disc',
        listStylePosition: 'inside'
    };

    return (
        <div style={{ height: '90vh' }}>
            <div style={infoStyle}>
                {information}
            </div>
            <div style={gridStyle}>
                {bulletPoints.map((pts, i) => {
                    return (
                        <div key={i}>
                            <h2 style={titleStyle}>{bulletTitle[i]}</h2>
                            <ul style={listStyle}>
                                {pts.map((item, ii) =>
                                    <li key={ii} style={{ marginBottom: '0.25rem', background: ii == highlightIndexes[i] ? "yellow" : "" }}>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

