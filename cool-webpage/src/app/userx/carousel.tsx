"use client";
import { useEffect, useRef, useState } from "react";
import SectionInf from "./components/sectionInf";
import TitleSection from "./components/titleSection";

export default function Carousel() {
    const titles: string[] = ["information", "experience", "projects", "socials", "\\[a-z]&\\-d\\"];
    const sectionsData = [
        {
            information: "Developer who's been known to accidentally start projects in HTML before realizing I still need CSS to make them look pretty. In short, I'm always learning, occasionally debugging in my dreams, and forever grateful that semicolons sometimes matter in code, not sentences",
            bulletTitle: ["tech", "languages", "interests"],
            bulletPoints: [
                ["html, css & javascript", "typescript", "java", "python", "mongodb & sql", "UNIX based systems", "flutter/dart", "arduino", "react.js", "laravel"],
                ["spanish [Native]", "english [C1]", "french [B1]"],
                ["technology", "innovation", "music", "coffee & tea", "sports"],
            ]
        },
        {
            information: `I taught eager young minds how to conquer fractions and algebra… and discovered that "x" can be a notoriously shy character.  I sat shoulder-to-keyboard with seasoned developers, picked up best practices, and learned that "it works on my machine" is my moto.`,
            bulletTitle: ["Web developer intern - 4040APPS", "Assistant instructor - Kumon"],
            bulletPoints: [
                [
                    "Developed, maintained, and refactored large React modules and dashboards for a field-operations platform tracking utilities and property-tax expenses.",
                    "Integrated REST APIs (fetch) to render operational and financial data across multiple dashboard components, improving consistency and reliability of data display.",
                    "Enhanced Google Maps API views to support multiple data layers and improve map usability for operational workflows.",
                    "Streamlined the UI flow for PDF requests to support backend generation and reduce user steps in common tasks.",
                    "Collaborated through Git/GitHub with pull requests and code reviews; supported releases with structured manual testing and iterative fixes.",
                ],

                [
                    "Delivered 1:1 instruction in math and reading (~5 students/day), adapting learning plans and pacing to improve outcomes.",
                    "Diagnosed recurring errors, reinforced problem-solving strategies, and tracked progress using detailed performance reports.",
                ],
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
                ['youtube', 'instagram', 'linkedin', 'github', 'chess'],
            ],
            bulletLinks: [
                [
                    "http://www.youtube.com/@jorge_u.",
                    "https://www.instagram.com/yorchprofe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
                    "https://www.linkedin.com/in/jorge-chavira-94b85434a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEiivoMheQsKdhsXx7Zgoaw%3D%3D",
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
        <section className="flex flex-row flex-wrap w-screen h-screen" >
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
                // className="flex-1 overflow-y-auto h-screen scroll-smooth"
                className="flex-1 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth overscroll-auto"
            >
                {sectionsData.map((sectionData, index) => (
                    <div
                        key={index}
                        ref={(el) => setSectionRef(el, index)}
                        id={`section-${index}`}
                        // className="section-container transition-colors duration-300 ease-in-out"
                        className="section-container h-screen snap-start transition-colors duration-300 ease-in-out"

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