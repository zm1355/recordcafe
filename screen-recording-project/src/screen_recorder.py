class ScreenRecorder:
    def __init__(self, output_file='output.mp4', fps=20.0):
        self.output_file = output_file
        self.fps = fps
        self.is_recording = False
        self.frames = []

    def start_recording(self):
        import cv2
        import numpy as np
        from mss import mss

        self.is_recording = True
        with mss() as sct:
            monitor = sct.monitors[1]  # Use the first monitor
            fourcc = cv2.VideoWriter_fourcc(*"mp4v")
            out = cv2.VideoWriter(self.output_file, fourcc, self.fps, (monitor['width'], monitor['height']))

            while self.is_recording:
                img = sct.grab(monitor)
                frame = np.array(img)
                frame = cv2.cvtColor(frame, cv2.COLOR_BGRA2BGR)
                out.write(frame)

    def stop_recording(self):
        self.is_recording = False

    def save_recording(self):
        # In this implementation, the recording is saved automatically when stopped
        pass