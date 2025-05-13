"use client";
import SectionInf from "./components/sectionInf";
import TitleSection from "./components/titleSection";

export default function Carousel() {


    return (
        <section className="flex flex-row w-screen h-screen" style={{ flexWrap: 'wrap' }}>
            <div>
                <TitleSection title="information" />
            </div>
            <div className=" flex-1 overflow-y-auto h-screen" >
                <SectionInf
                    information="Developer who’s been known to accidentally start projects in HTML before realizing I still need CSS to make them look pretty. In short, I’m always learning, occasionally debugging in my dreams, and forever grateful that semicolons sometimes matter in code, not sentences. Let’s build something fun (and functional) together!"
                    bulletTitle={["tech", "languages", "interests"]}
                    bulletPoints={[
                        ["html",
                            "css",
                            "javascript",
                            "java",
                            "python",
                            "mongodb",
                            "sql",
                            "UNIX based systems",
                            "flutter",
                            "dart",
                            "arduino",
                            "react.js",
                            "laravel"
                        ],
                        ["english", "spanish", "french"],
                        ["technology",
                            "innovation",
                            "music",
                            "coffee & tea",
                            "sports"],
                    ]} />
                <SectionInf
                    information="I taught eager young minds how to conquer fractions and algebra… and discovered that “x” can be a notoriously shy character.  I sat shoulder-to-keyboard with seasoned developers, picked up best practices, and learned that “it works on my machine” is my moto."
                    bulletTitle={["first job", "second job"]}
                    bulletPoints={[
                        ["math tutor at kumon"],
                        ["software developer intern at 4040Apps"],
                    ]} />
                <SectionInf
                    information="…And at the end of the day, whether I’m spinning up servers, marshaling mobile widgets, or wrangling algorithms, I’m always chasing that satisfying “it just works” moment"
                    bulletTitle={["web", "mobile", "other"]}
                    bulletPoints={[
                        [`ThreadOne - web app for a t-shirt store`,
                            `BeatFinder - web app for music recommendations using spotify's api`,
                            `PacePoint - web app for traffic management`],
                        ["MAHUNT - android game app", "FastTrack - flutter app for emergency situation for smart traffick lights", "Slate - flutter app for personal task management ","RecipeBook - flutter app for recipes"],
                        ["smart traffic light system using ai", "simulation of various fluid equations using python ", "recreation of various data structures in java from zero "],
                    ]} />
            </div>
        </section>
    )
}

/*
    *  whois      - Who is Jorge?",
    *  videos     - Visit YouTube channel",
    *  projects   - Visit GitHub",
    *  social     - Display social networks",
    *  secret     - Password required",
 */