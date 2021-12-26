import PublicGoogleSheetsParser from "@andrewlevada/public-google-sheets-parser/dist";

const spreadsheetId = "1aj7yB3noTP8Y2pmHC4OuIj1Z-nY-0EoSAnNbMIF4kPo";
const parser = new PublicGoogleSheetsParser();

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
export function getCardsFor(section: ContentSections): Promise<Card[]> {
    return parser.parse(spreadsheetId, capitalize(section)).then(data => data.map(v => ({
        title: v.Title,
        text: v.Text,
        link: v.Link,
        href: v["Link URL"],
        tags: trimArray([v.Tag1, v.Tag2, v.Tag3]),
    }) as Card));
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.substring(1);
}

function trimArray<T>(a: T[]): T[] {
    const n = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const i of a) if (i !== undefined) n.push(i);
    return n;
}
