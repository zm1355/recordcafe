import moviepy.editor as mp
from moviepy.video.fx.all import resize
import requests
import os

class VideoEditor:
    def __init__(self):
        self.video = None
        self.max_duration = 180  # 3 minutes in seconds

    def upload_video(self, file_path):
        self.video = mp.VideoFileClip(file_path)
        if self.video.duration > self.max_duration:
            self.video = self.video.subclip(0, self.max_duration)
        print(f"Video uploaded: {file_path}")

    def download_resource(self, url, save_path):
        response = requests.get(url)
        with open(save_path, 'wb') as file:
            file.write(response.content)
        print(f"Resource downloaded: {save_path}")

    def apply_style(self, style):
        if style == "resize":
            self.video = resize(self.video, width=480)
        # Add more styles as needed
        print(f"Applied style: {style}")

    def add_music(self, music_path):
        music = mp.AudioFileClip(music_path)
        self.video = self.video.set_audio(music)
        print(f"Music added: {music_path}")

    def save_video(self, output_path):
        self.video.write_videofile(output_path)
        print(f"Video saved: {output_path}")

# Example usage
editor = VideoEditor()
editor.upload_video("input_video.mp4")
editor.download_resource("https://recloud.com/resource.mp3", "downloaded_music.mp3")
editor.apply_style("resize")
editor.add_music("downloaded_music.mp3")
editor.save_video("output_video.mp4")