// This file is the entry point of the application. It initializes the application and sets up the main functionality for audio recording.

import { Recorder } from './components/Recorder';

const recorder = new Recorder();

const init = () => {
    console.log('Audio Recording Software Initialized');
    // Additional initialization code can go here
};

init();