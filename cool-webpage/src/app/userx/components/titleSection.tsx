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
        <h1 className="text-2xl font-bold">{title}</h1>
      </span>
      <div 
        className="absolute border" 
        style={{
          bottom: '100px',
          left: '1rem',
        }}
      >
        {listTitles.map((title, i) => (
          <div 
            key={i}
            onClick={() => onTitleClick && onTitleClick(i)}
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
            {`[0-0${i}]_${title}`}
          </div>
        ))}
      </div>
    </div>
  );
}