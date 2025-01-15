export interface AudioSettings {
    sampleRate: number;
    channels: number;
    bitRate: number;
}

export interface RecordingState {
    isRecording: boolean;
    audioBlob?: Blob;
    duration: number; // in seconds
}