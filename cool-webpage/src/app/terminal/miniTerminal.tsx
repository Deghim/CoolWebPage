"use client";

export default function MiniTerm({ content }: { content: string[] }) {
    return (
        <div className="bg-slate-800 text-slate-300 text-xs p-2 max-h-48 overflow-auto rounded-md shadow-md">
            <h3 className="font-bold border-b border-slate-700 pb-1 mb-1">Terminal Overview</h3>
            <div className="space-y-1 bg-amber-500">
                {content.map((line, index) => (
                    <div key={index} className="truncate">{line}</div>
                ))}
            </div>
        </div>
    );
}