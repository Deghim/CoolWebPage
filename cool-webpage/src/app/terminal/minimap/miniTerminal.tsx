"use client";

import React from "react";
import { CSSProperties } from "react";

function MiniTerm({ content }: { content: string[] }) {
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

export default React.memo(MiniTerm);