'use client';
interface SectionInformationProps {
    information: string;
    bulletTitle: string[];
    bulletPoints: string[][];
}

export default function SectionInformation({ information, bulletTitle, bulletPoints }: SectionInformationProps) {
    return (

        <div>
            <div
                style={{
                    marginTop: 'calc(var(--spacing)*30)',
                    paddingRight: 'calc(var(--spacing)*10)',
                    textAlign: 'justify',
                    marginBottom: 'calc(var(--spacing)*10)'
                }}>
                <span>{information}</span>
            </div>
            <div className="flex flex-row "
                style={{
                    flexWrap:'wrap',
                    gap: '40px',
                    minHeight: '50%',
                    width:'auto',
                    border: '1px solid',
                }}>
                {bulletPoints.map((pt, i) => (
                    <div key={i} className=" flex-1"
                        style={{
                            border: '1px solid',
                            padding: '20px'
                        }}>
                        <h2 className="font-bold" style={{ margin: '20px 20px 40px 0px' }}>{bulletTitle[i]}</h2>
                        <ul className="list-disc list-inside" style={{ marginLeft: '20px' }}>
                            {pt.map((item, ii) => (<li key={ii} >{item}</li>))}
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