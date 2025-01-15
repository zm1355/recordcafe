Here are the contents for the file: /online-video-recording/online-video-recording/src/main.py

import cv2
from video_capture import VideoCapture

def main():
    video_capture = VideoCapture()
    
    while True:
        command = input("Enter 'start' to begin recording, 'stop' to stop recording, or 'exit' to quit: ").strip().lower()
        
        if command == 'start':
            video_capture.start_capture()
        elif command == 'stop':
            video_capture.stop_capture()
        elif command == 'exit':
            if video_capture.is_recording:
                video_capture.stop_capture()
            break
        else:
            print("Invalid command. Please try again.")

if __name__ == "__main__":
    main()