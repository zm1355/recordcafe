export class AspectRatio {
    private ratios: { [key: string]: string };

    constructor() {
        this.ratios = {
            '16:9': 'Standard widescreen',
            '4:3': 'Standard',
            '1:1': 'Square',
            '21:9': 'Cinema',
            '9:16': 'Vertical'
        };
    }

    setAspectRatio(ratio: string): string {
        if (this.ratios[ratio]) {
            return `Aspect ratio set to ${ratio}: ${this.ratios[ratio]}`;
        } else {
            throw new Error('Invalid aspect ratio');
        }
    }

    getAvailableRatios(): string[] {
        return Object.keys(this.ratios);
    }
}