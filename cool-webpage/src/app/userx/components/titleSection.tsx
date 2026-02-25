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
            className="relative flex justify-center h-screen w-[200px] pt-20"
        >
            <span>
                <h1
                    className="text-2xl font-bold"
                >
                    {displayText}
                    <span
                        className="inline-block w-[3px] h-[1em] bg-current relative ml-[2px] align-middle animate-[blink_1s_step-end_infinite]"
                    />
                </h1>
            </span>
            <div
                className="absolute border bottom-25 w-40"
            >
                {listTitles.map((listTitle, i) => (
                    <div
                        key={i}
                        onClick={() => onTitleClick?.(i)}
                        className={
                            `cursor-pointer p-1 transition-all duration-300 ` +
                            (currentIndex === i
                                ? `text-[color:var(--background)] bg-[color:var(--foreground)] font-bold`
                                : `text-[color:var(--foreground)] bg-transparent`)
                        }
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