class Recorder {
    private mediaRecorder: MediaRecorder | null = null;
    private audioChunks: Blob[] = [];

    constructor() {
        this.initializeMediaRecorder();
    }

    private async initializeMediaRecorder() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (event) => {
            this.audioChunks.push(event.data);
        };
    }

    public startRecording() {
        if (this.mediaRecorder) {
            this.audioChunks = [];
            this.mediaRecorder.start();
        }
    }

    public stopRecording() {
        return new Promise<Blob>((resolve) => {
            if (this.mediaRecorder) {
                this.mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                    resolve(audioBlob);
                };
                this.mediaRecorder.stop();
            }
        });
    }

    public async getAudioBlob(): Promise<Blob | null> {
        if (this.audioChunks.length > 0) {
            return new Blob(this.audioChunks, { type: 'audio/wav' });
        }
        return null;
    }
}

export default Recorder;