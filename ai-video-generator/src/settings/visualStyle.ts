class VisualStyle {
    private styles: string[];

    constructor() {
        this.styles = ['default', 'cinematic', 'vintage', 'black-and-white', 'animated'];
    }

    getAvailableStyles(): string[] {
        return this.styles;
    }

    applyStyle(selectedStyle: string): string {
        if (this.styles.includes(selectedStyle)) {
            return `Applying ${selectedStyle} style to the video.`;
        } else {
            throw new Error('Invalid visual style selected.');
        }
    }
}

export default VisualStyle;