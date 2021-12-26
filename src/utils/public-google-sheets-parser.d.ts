declare module "public-google-sheets-parser/dist" {
    class PublicGoogleSheetsParser {
        constructor();
        parse(spreadsheetId: string, sheetName: string): Promise<Record<string, string>[]>;
    }
    export = PublicGoogleSheetsParser
}
