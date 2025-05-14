'use client';
import { useEffect, useState, useRef } from "react";

interface TitleSectionProps {
    title: string;
    listTitles: string[];
    onTitleClick?: (index: number) => void;
    currentIndex?: number;
}

export default function TitleSection({
    title,
    listTitles,
    onTitleClick,
    currentIndex = 0
}: TitleSectionProps) {
    const [displayText, setDisplayText] = useState(title);
    const [mode, setMode] = useState<'deleting' | 'typing'>('typing');
    const targetTitleRef = useRef(title);

    useEffect(() => {
        if (title !== targetTitleRef.current) {
            targetTitleRef.current = title;
            setMode('deleting');
        }
    }, [title]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (mode === 'deleting') {
            if (displayText.length === 0) {
                setMode('typing');
            } else {
                timeoutId = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                }, 50);
            }
        } else if (mode === 'typing') {
            const targetText = targetTitleRef.current;

            timeoutId = setTimeout(() => {
                setDisplayText(prev =>
                    targetText.slice(0, prev.length + 1)
                );
            }, 70);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [mode, displayText]);

    return (
        <div
            className="relative flex justify-center h-screen"
            style={{
                width: '20vw',
                minWidth: '200px',
                maxWidth: '400px',
                padding: "100px",
            }}
        >
            <span>
                <h1
                    className="text-2xl font-bold"
                    style={{
                        marginLeft:'1rem',
                        paddingRight: '1rem',
                        position: 'relative',
                        width: 'auto',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {displayText}
                    <span
                        style={{
                            display: 'inline-block',
                            width: '3px',
                            height: '1em',
                            backgroundColor: 'currentColor',
                            position: 'relative',
                            marginLeft: '2px',
                            verticalAlign: 'middle',
                            animation: 'blink 1s step-end infinite'
                        }}
                    ></span>
                </h1>
            </span>
            <div
                className="absolute border"
                style={{
                    bottom: '100px',
                    left: '1rem',
                }}
            >
                {listTitles.map((listTitle, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            onTitleClick?.(i);
                        }}
                        style={{
                            cursor: 'pointer',
                            color: currentIndex === i ? 'var(--background)' : 'var(--foreground)',
                            background: currentIndex === i ? 'var(--foreground)' : '',
                            transition: 'all 0.3s ease',
                            padding: '0.25rem 0',
                            paddingLeft: '0.25rem',
                            paddingRight: '0.25rem',
                        }}
                    >
                        {`[0-0${i}]_${listTitle}`}
                    </div>
                ))}
            </div>

            <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </div>
    );
}