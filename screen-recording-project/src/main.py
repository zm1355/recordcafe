from screen_recorder import ScreenRecorder

def main():
    recorder = ScreenRecorder()
    
    while True:
        command = input("Enter 'start' to begin recording, 'stop' to end recording, or 'exit' to quit: ").strip().lower()
        
        if command == 'start':
            recorder.start_recording()
            print("Recording started...")
        elif command == 'stop':
            recorder.stop_recording()
            print("Recording stopped.")
            save_path = input("Enter the path to save the recording: ")
            recorder.save_recording(save_path)
            print(f"Recording saved to {save_path}.")
        elif command == 'exit':
            if recorder.is_recording:
                recorder.stop_recording()
            print("Exiting the application.")
            break
        else:
            print("Invalid command. Please try again.")

if __name__ == "__main__":
    main()