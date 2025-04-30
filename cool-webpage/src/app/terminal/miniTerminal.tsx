"use client";

import { CSSProperties } from "react";

export default function MiniTerm({ content }: { content: string[] }) {
    const font: CSSProperties = {
        fontSize: '4px'

    }
    return (
        <div style={{
            background: 'var(--background)',
        }} className="space-y-1 ">
            {content.map((line, index) => (
                <div key={index}
                    style={font}
                    className="truncate">{line}</div>
            ))}
        </div>
    );
}