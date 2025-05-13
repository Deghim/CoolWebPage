'use client';
interface SectionInformationProps {
    information: string;
    bulletTitle: string[];
    bulletPoints: string[][];
}

export default function SectionInformation({ information, bulletTitle, bulletPoints }: SectionInformationProps) {
    return (
        <div className="h-screen content-center">
            <div className="w-full h-[10vh] border-2 border-green-500">
                <span>{information}</span>
            </div>
            <div className="flex items-center justify-evenly w-full border-2 border-blue-500">
                {bulletPoints.map((pt, i) => (
                    <div key={i} className=" border-2 border-red-600">
                        <h2 className=" font-bold">{bulletTitle[i]}</h2>
                        <ul className="list-disc list-inside">
                            {pt.map((item, ii) => (
                                <li key={ii}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    )
}

/*
    *  whois      - Who is Jorge?",
    *  videos     - Visit YouTube channel",
    *  projects   - Visit GitHub",
    *  social     - Display social networks",
    *  secret     - Password required",
 */