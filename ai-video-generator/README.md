# AI Video Generator

## Overview
The AI Video Generator project is designed to create videos based on user-defined settings such as visual style, aspect ratio, and prompt words. The application leverages AI algorithms to generate prompt words that enhance the video generation process.

## Features
- **Visual Style**: Choose from various visual styles to apply to your video.
- **Aspect Ratio**: Configure the output dimensions of the video with different aspect ratios.
- **Prompt Words Generation**: Automatically generate prompt words using AI to achieve desired video effects.

## Project Structure
```
ai-video-generator
├── src
│   ├── index.ts                # Entry point of the application
│   ├── settings
│   │   ├── visualStyle.ts      # Class for visual styles
│   │   ├── aspectRatio.ts      # Class for aspect ratios
│   │   └── promptWords.ts      # Class for managing prompt words
│   ├── ai
│   │   ├── generatePromptWords.ts # AI function for generating prompt words
│   │   └── generateVideo.ts     # Function to generate video
│   └── types
│       └── index.ts            # Type definitions for video settings and prompts
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ai-video-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application, execute the following command:
```
npm start
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.