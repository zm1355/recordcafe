export interface VideoSettings {
    visualStyle: string;
    aspectRatio: string;
    promptWords: string[];
}

export interface Prompt {
    generate: (criteria: any) => string[];
    set: (words: string[]) => void;
}