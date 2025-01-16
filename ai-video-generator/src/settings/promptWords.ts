export class PromptWords {
    private promptWords: string[];

    constructor() {
        this.promptWords = [];
    }

    setPromptWords(words: string[]): void {
        this.promptWords = words;
    }

    getPromptWords(): string[] {
        return this.promptWords;
    }

    generatePromptWords(criteria: any): string[] {
        // Placeholder for AI-generated prompt words based on criteria
        // This should call the AI algorithm to generate prompt words
        return ["example prompt 1", "example prompt 2"];
    }
}