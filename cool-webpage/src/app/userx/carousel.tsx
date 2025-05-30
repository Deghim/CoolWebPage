"use client";
import { useEffect, useRef, useState } from "react";
import SectionInf from "./components/sectionInf";
import TitleSection from "./components/titleSection";

export default function Carousel() {
    const titles: string[] = ["information", "experience", "projects", "socials", "\\[a-z]^[A-Z]&\\-d\\"];
    const sectionsData = [
        {
            information: "Developer who's been known to accidentally start projects in HTML before realizing I still need CSS to make them look pretty. In short, I'm always learning, occasionally debugging in my dreams, and forever grateful that semicolons sometimes matter in code, not sentences. Let's build something fun (and functional) together!",
            bulletTitle: ["tech", "languages", "interests"],
            bulletPoints: [
                ["html, css & javascript", "java", "python", "mongodb", "sql", "UNIX based systems", "flutter/dart", "arduino", "react.js", "laravel", "typescript"],
                ["english", "spanish", "french"],
                ["technology", "innovation", "music", "coffee & tea", "sports"],
            ]
        },
        {
            information: `I taught eager young minds how to conquer fractions and algebra… and discovered that "x" can be a notoriously shy character.  I sat shoulder-to-keyboard with seasoned developers, picked up best practices, and learned that "it works on my machine" is my moto.`,
            bulletTitle: ["first job", "second job"],
            bulletPoints: [
                ["math tutor at kumon"],
                ["software developer intern at 4040Apps"],
            ]
        },
        {
            information: `…And at the end of the day, whether I'm spinning up servers, marshaling mobile widgets, or wrangling algorithms, I'm always chasing that satisfying "it just works" moment`,
            bulletTitle: ["web", "mobile", "other"],
            bulletPoints: [
                [`ThreadOne - web app for a t-shirt store`, `BeatFinder - web app for music recommendations using spotify's api`, `PacePoint - web app for traffic management`],
                ["MAHUNT - android game app", "FastTrack - flutter app for emergency situation for smart traffick lights", "Slate - flutter app for personal task management ", "RecipeBook - flutter app for recipes"],
                ["smart traffic light system using ai", "simulation of various fluid equations using python ", "recreation of various data structures in java from zero "],
            ]
        },
        {
            information: "Here are my socials",
            bulletTitle: ["socials"],
            bulletPoints: [
                ['youtube', 'instagram', 'tiktok', 'linkedin', 'github', 'chess'],
            ],
            bulletLinks: [
                [
                    "http://www.youtube.com/@jorge_u.",
                    "https://www.instagram.com/yorchprofe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
                    "https://www.tiktok.com/@jorge_u._?is_from_webapp=1&sender_device=pc",
                    "https://www.linkedin.com/in/jorge-u-94b85434a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BERDmXUkKSra%2F5WdKE5NKQw%3D%3D",
                    "https://github.com/Deghim",
                    "https://www.chess.com/member/deghim"
                ]
            ]
        },
        {
            information: "U2FsdGVkX18EP1U5/N3KD7MJw6ItKFTQfjtu5RZg86s=Secret",
            bulletTitle: ["!##$%$$$%#!", "**&^*$%$!@", "@!**#%&*$%!"],
            bulletPoints: [
                ["!@#$%^&*()", ")(*&^%$#@", "{}|:\"<>?"],
                ["~`!@#%^&*(", "_+{}|:\"<>", "?><:{}|+_"],
                ["-=[];'./,`", "<>?:\"{}|><", "!@#$$%^&*("],
                ["_+|}{\":?><", "`~!@#$%^&", "&*()_+|}{:"]
            ]
        }
    ];

    const [currentSection, setCurrentSection] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (sectionRefs.current.length !== sectionsData.length) sectionRefs.current = Array(sectionsData.length).fill(null);

    const setSectionRef = (el: HTMLDivElement | null, index: number) => {
        sectionRefs.current[index] = el;
    };

    const handleTitleClick = (index: number) => {
        if (scrollContainerRef.current && sectionRefs.current[index]) {
            setIsTransitioning(true);

            sectionRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            setCurrentSection(index);

            setTimeout(() => {
                setIsTransitioning(false);
            }, 800);
        }
    };

    useEffect(() => {
        sectionRefs.current = sectionRefs.current.slice(0, sectionsData.length);

        const observerOptions = {
            root: scrollContainerRef.current, // The scroll container as the root
            rootMargin: '-10% 0px -50% 0px', // Top margin is small, bottom is larger
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for better detection
        };

        const observer = new IntersectionObserver((entries) => {
            if (isTransitioning) return;

            let maxVisibility = 0;
            let mostVisibleIndex = -1;

            entries.forEach(entry => {
                const index = sectionRefs.current.findIndex(ref => ref === entry.target);

                if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
                    maxVisibility = entry.intersectionRatio;
                    mostVisibleIndex = index;
                }
            });

            if (mostVisibleIndex !== -1 && maxVisibility > 0.1) {
                setCurrentSection(mostVisibleIndex);
            }
        }, observerOptions);

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [isTransitioning, sectionsData.length]);

    return (
        <section className="flex flex-row w-screen h-screen" style={{ flexWrap: 'wrap' }}>
            <div>
                <TitleSection
                    title={titles[currentSection]}
                    listTitles={titles}
                    onTitleClick={handleTitleClick}
                    currentIndex={currentSection}
                />
            </div>
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto h-screen"
                style={{ scrollBehavior: 'smooth' }}
            >
                {sectionsData.map((sectionData, index) => (
                    <div
                        key={index}
                        ref={(el) => setSectionRef(el, index)}
                        id={`section-${index}`}
                        className="section-container"
                        style={{
                            minHeight: '90vh',
                            paddingTop: '2rem',
                            paddingBottom: '2rem',
                            transition: 'border-color 0.3s ease'
                        }}
                    >
                        <SectionInf
                            information={sectionData.information}
                            bulletTitle={sectionData.bulletTitle}
                            bulletPoints={sectionData.bulletPoints}
                            bulletLinks={sectionData.bulletLinks}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}