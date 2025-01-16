export function generatePromptWords(criteria: { style: string; theme: string; keywords: string[] }): string[] {
    const { style, theme, keywords } = criteria;
    const generatedWords: string[] = [];

    // Example AI logic to generate prompt words
    generatedWords.push(`A ${style} video about ${theme}`);
    keywords.forEach(keyword => {
        generatedWords.push(`Include ${keyword}`);
    });

    // Add more AI-generated variations
    generatedWords.push(`Explore the concept of ${theme} in a ${style} style`);
    generatedWords.push(`Create a ${style} video featuring ${keywords.join(', ')}`);

    return generatedWords;
}