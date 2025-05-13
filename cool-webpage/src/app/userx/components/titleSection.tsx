
export default function TitleSection({ title }: { title: string }) {
    return (
        <div className=" flex justify-center h-screen w-20 p-30 border border-green-500 ">
            <span>
                <h1 className="text-2xl font-bold">{title} </h1>
            </span>
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