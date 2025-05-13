interface TitleSectionProps{
    title:string
    listTitles:string[]
} 

export default function TitleSection({ title, listTitles }: TitleSectionProps) {
    return (
        <div className="relative flex justify-center h-screen" 
        style={{
            width: '20vw',
            minWidth: '200px',
            maxWidth: '400px',
            padding: "100px",
        }}>
            <span>
                <h1 className="text-2xl font-bold">{title} </h1>
            </span>

            <div className="absolute border " style={{bottom:'100px',left:'1rem',paddingLeft:'0.5rem',paddingRight:'0.5rem'}}>
                {listTitles.map((title,i)=>(<div key={i}>{`[0-0${i}]_${title}`}</div>))}
            </div>
        </div>
    )
}
