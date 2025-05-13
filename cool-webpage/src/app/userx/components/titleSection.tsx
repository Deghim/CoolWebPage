
export default function TitleSection({ title }: { title: string }) {
    return (
        <div className=" flex justify-center h-screen" style={{
            width: '20vw',
            minWidth: '200px',
            maxWidth: '400px',
            padding: "100px",
        }}>
            <span>
                <h1 className="text-2xl font-bold">{title} </h1>
            </span>
        </div>
    )
}
