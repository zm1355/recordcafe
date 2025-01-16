// This file is the entry point of the application. It initializes the video generator and sets up the main application logic.

import { VisualStyle } from './settings/visualStyle';
import { AspectRatio } from './settings/aspectRatio';
import { PromptWords } from './settings/promptWords';
import { generatePromptWords } from './ai/generatePromptWords';
import { generateVideo } from './ai/generateVideo';

const visualStyle = new VisualStyle();
const aspectRatio = new AspectRatio();
const promptWords = new PromptWords();

// Example settings
visualStyle.applyStyle('cinematic');
aspectRatio.setAspectRatio('16:9');

// Generate prompt words using AI
const generatedPromptWords = generatePromptWords({ style: visualStyle.currentStyle, theme: 'adventure' });
promptWords.setPromptWords(generatedPromptWords);

// Generate the video
generateVideo(visualStyle.currentStyle, aspectRatio.currentRatio, promptWords.getPromptWords());