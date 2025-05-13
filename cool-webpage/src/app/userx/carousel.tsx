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
                    information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
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
                            "arduino"],
                        ["english", "spanish", "french"],
                        ["technology",
                            "innovation",
                            "music",
                            "coffee and tea",
                            "sports"],
                    ]} />
                {/* <SectionInf
                    information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
                    bulletTitle={["first job", "second job"]}
                    bulletPoints={[
                        ["math tutor"],
                        ["software developer intern at 4040Apps"],
                    ]} />
                <SectionInf
                    information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
                    bulletTitle={["web", "mobile", "other"]}
                    bulletPoints={[
                        [`ThreadOne - web app for a t-shirt store`,
                            `BeatFinder - web app for music recommendations using spotify's api`,
                            `PacePoint - web app for traffic management`],
                        ["MAHUNT - android game app", "FastTrack - flutter app for emergency situation for smart traffick lights", "Slate - flutter app for personal task management ","RecipeBook - flutter app for recipes"],
                        ["smart traffic light system using ai", "simulation of various fluid equations using python ", "recreation of various data structures in java from zero "],
                    ]} /> */}
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