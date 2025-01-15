export function convertAudioFormat(audioBlob: Blob, targetFormat: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(reader.result as ArrayBuffer, (buffer) => {
                const offlineContext = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
                const source = offlineContext.createBufferSource();
                source.buffer = buffer;
                source.connect(offlineContext.destination);
                source.start(0);
                offlineContext.startRendering().then((renderedBuffer) => {
                    const wavBlob = bufferToWave(renderedBuffer, renderedBuffer.length);
                    resolve(wavBlob);
                }).catch(reject);
            }, reject);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(audioBlob);
    });
}

export function saveAudioFile(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function bufferToWave(abuffer: AudioBuffer, len: number): Blob {
    const numOfChannels = abuffer.numberOfChannels;
    const length = len * numOfChannels * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels = [];
    let offset = 0;
    let pos = 0;

    // Write WAVE header
    setString(view, pos, 'RIFF'); pos += 4;
    view.setUint32(pos, length - 8, true); pos += 4;
    setString(view, pos, 'WAVE'); pos += 4;
    setString(view, pos, 'fmt '); pos += 4;
    view.setUint32(pos, 16, true); pos += 4;
    view.setUint16(pos, 1, true); pos += 2; // PCM
    view.setUint16(pos, numOfChannels, true); pos += 2;
    view.setUint32(pos, abuffer.sampleRate, true); pos += 4;
    view.setUint32(pos, abuffer.sampleRate * 2, true); pos += 4; // byte rate
    view.setUint16(pos, numOfChannels * 2, true); pos += 2; // block align
    view.setUint16(pos, 16, true); pos += 2; // bits per sample
    setString(view, pos, 'data'); pos += 4;
    view.setUint32(pos, length - pos - 4, true); pos += 4;

    for (let i = 0; i < numOfChannels; i++) {
        channels.push(abuffer.getChannelData(i));
    }

    while (pos < length) {
        for (let i = 0; i < numOfChannels; i++) {
            const sample = Math.max(-1, Math.min(1, channels[i][offset]));
            view.setInt16(pos, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
            pos += 2;
        }
        offset++;
    }

    return new Blob([buffer], { type: 'audio/wav' });
}

function setString(dataView: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
        dataView.setUint8(offset + i, string.charCodeAt(i));
    }
}