import PublicGoogleSheetsParser from "@andrewlevada/public-google-sheets-parser/dist";
import { getLocale } from "~src/global";

const spreadsheetId = "1aj7yB3noTP8Y2pmHC4OuIj1Z-nY-0EoSAnNbMIF4kPo";
const parser = new PublicGoogleSheetsParser();

export interface BadgeCard {
    title: string;
    href: string;
}

export interface Card extends BadgeCard {
    text: string | undefined;
    link: string;
    isList: boolean;
}

export interface ProjectCard extends Card {
    description: string | undefined;
}

export type ContentSections = "jobs" | "projects" | "education";
export type RemoteTextLabel = "title" | "status";

// eslint-disable-next-line max-len
export function getTextFor(labels: RemoteTextLabel[]): Promise<{ label: RemoteTextLabel, text: string }[]> {
    return parser.parse(spreadsheetId, "General")
        .then(data => data.filter(v => labels.includes(v.Label.toLowerCase() as RemoteTextLabel))
            .map(v => ({ label: v.Label.toLowerCase() as RemoteTextLabel, text: v[localize("Text")] })));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getCardsFor(section: ContentSections): Promise<Card[]> {
    return parser.parse(spreadsheetId, capitalize(section)).then(data => data.map(v => ({
        title: v[localize("Title")] || v.Title,
        text: v[localize("Text")] || v.Text,
        link: v[localize("Link")] || v.Link,
        href: v["Link URL"],
        isList: v["Is List"] === "Yes",
        description: v[localize("Description")] || v.Description,
    }) as Card));
}

function localize(s: string): string {
    return `${s} [${getLocale().toUpperCase()}]`;
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.substring(1);
}
