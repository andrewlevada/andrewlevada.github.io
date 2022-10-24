import PublicGoogleSheetsParser from "@andrewlevada/public-google-sheets-parser/dist";
import { getLocale } from "~src/global";

// For this CV content is stored in google sheets
// With one sheet for general text tokens
// And one more sheet for each content column

const spreadsheetId = "1aj7yB3noTP8Y2pmHC4OuIj1Z-nY-0EoSAnNbMIF4kPo";
const parser = new PublicGoogleSheetsParser();

export type ContentSections = "jobs" | "projects" | "education";
export type RemoteTextLabel = "title" | "status";

export type UnorderedList = string[];

export interface Card {
	title: string;
	paragraphs: (string | UnorderedList)[];

	link?: {
		label: string;
		url: string;
	}
}

// Extracts key-value pairs from table 'General' with structure:
// Label | Text [Locale code 1] | Text [Locale code 2] ...
export async function fetchTextFor(labels: RemoteTextLabel[]): Promise<{ label: RemoteTextLabel, text: string }[]> {
	const tableRows = await parser.parse(spreadsheetId, "General");
	const rows = tableRows.filter(row => labels.includes(row.label.toLowerCase() as RemoteTextLabel));
	return rows.map(row => ({
		label: row.label.toLowerCase() as RemoteTextLabel,
		text: row[localizeHeader("text")]
	}));
}

export async function getCardsFor(section: ContentSections): Promise<Card[]> {
	const tableRows = await parser.parse(spreadsheetId, capitalize(section));

	return tableRows.map(v => {
		const text = v[localizeHeader("text")];
		const lines = !!text ? text.split("\n") : [];
		const paragraphs: (string | UnorderedList)[] = [];

		for (let i = 0; i < lines.length; i++) {
			if (!lines[i].startsWith("*")) {
				paragraphs.push(lines[i]);
				continue;
			}

			// Interpret line as an item of a list

			// If last paragraph is not a list we create one
			if (paragraphs.length == 0 || typeof paragraphs[paragraphs.length - 1] == "string") paragraphs.push([] as UnorderedList);
			(paragraphs[paragraphs.length - 1] as UnorderedList).push(lines[i].substring(2));
		}

		return {
			title: v[localizeHeader("title")],
			paragraphs,

			link: (v["link-url"] ? ({
				label: v[localizeHeader("link")],
				url: v["link-url"]
			}) : undefined)
		};
	});
}

function localizeHeader(s: string): string {
	return `${s} [${getLocale().toUpperCase()}]`;
}

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.substring(1);
}
