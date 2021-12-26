export interface Card {
    title: string;
    text: string;
    link: string;
    href: string;
    tags: string[];
}

export interface ProjectCard extends Card {
    description: string;
}

export type ContentSections = "jobs" | "projects" | "education";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getCardsFor(section: ContentSections): Card[] {
    return [{
        title: "Prepared and Taught a Course for Innopolis IT School",
        text: "With a partner I have created and caried out offline master class on artaficial intelegence in Innopolis University as part of «Smart Weekend» course. We have prepared interactive materials for learning Python and developed game-like simulation for AI in Unity (I was responsible for this part). In total, we have taught this master class to 4 groups with roughtly 25 people in each group.",
        link: "Materials attached",
        href: "#",
        tags: ["Innopolis", "Unity", "Python"],
    }];
}
