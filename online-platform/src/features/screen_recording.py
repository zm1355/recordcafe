class ScreenRecorder:
    def __init__(self):
        self.is_recording = False
        self.recording_file = None

    def start_recording(self):
        if not self.is_recording:
            # Logic to start screen recording
            self.is_recording = True
            print("Recording started.")

    def stop_recording(self):
        if self.is_recording:
            # Logic to stop screen recording
            self.is_recording = False
            print("Recording stopped.")

    def save_recording(self, file_path):
        if not self.is_recording:
            # Logic to save the recording to the specified file path
            self.recording_file = file_path
            print(f"Recording saved to {file_path}.")