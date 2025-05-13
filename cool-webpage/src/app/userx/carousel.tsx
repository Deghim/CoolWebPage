"use client";
import SectionInf from "./components/sectionInf";
import TitleSection from "./components/titleSection";
import Link from "next/link";

export default function Carousel() {


    return (
        <section className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-4">
            <div className="flex items-center w-full h-full">
                <Link href={'/'}>
                    <TitleSection title="information" />
                </Link>

                <div className="h-screen border-2 border-orange-500" >
                    <SectionInf
                        information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
                        bulletTitle={["tech", "languages", "interests"]}
                        bulletPoints={[
                            ["First A", "Second A", "Third A"],
                            ["First B", "Second B", "Third B"],
                            ["First C", "Second C", "Third C"],
                        ]} />
                    <SectionInf
                        information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
                        bulletTitle={["tech", "languages", "interests"]}
                        bulletPoints={[
                            ["First A", "Second A", "Third A"],
                            ["First B", "Second B", "Third B"],
                            ["First C", "Second C", "Third C"],
                        ]} />
                    <SectionInf
                        information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit architecto sunt itaque inventore nam quibusdam, porro saepe quo velit officia quos suscipit ad similique eius ullam vero adipisci veniam."
                        bulletTitle={["tech", "languages", "interests"]}
                        bulletPoints={[
                            ["First A", "Second A", "Third A"],
                            ["First B", "Second B", "Third B"],
                            ["First C", "Second C", "Third C"],
                        ]} />
                </div>
            </div>
        </section>
    )
}