class VideoCapture:
    def __init__(self):
        self.cap = None
        self.is_recording = False
        self.out = None

    def start_capture(self, output_filename):
        self.cap = cv2.VideoCapture(0)

        if not self.cap.isOpened():
            print("无法打开摄像头")
            return

        fourcc = cv2.VideoWriter_fourcc(*'XVID')
        self.out = cv2.VideoWriter(output_filename, fourcc, 20.0, (640, 480))
        self.is_recording = True

        while self.is_recording:
            ret, frame = self.cap.read()
            if not ret:
                print("无法接收帧")
                break

            self.out.write(frame)
            cv2.imshow('Video Capture', frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                self.stop_capture()

    def stop_capture(self):
        self.is_recording = False
        if self.cap is not None:
            self.cap.release()
        if self.out is not None:
            self.out.release()
        cv2.destroyAllWindows()

    def save_video(self, filename):
        if self.out is not None:
            self.out.release()
            print(f"视频已保存为 {filename}")