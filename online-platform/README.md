# Online Platform for Screen Recording and User Reviews

## Overview
This project is an online platform that provides screen recording functionality, user reviews, and group features for viewers of videos. It includes an API service that offers endpoints for managing user reviews.

## Features
- **Screen Recording**: Users can record their screens and save the recordings.
- **User Reviews**: Users can create, retrieve, and delete reviews for videos.
- **Group Feature**: Users can create groups and manage group members for collaborative viewing experiences.
- **API Service**: Provides endpoints for user reviews and other functionalities.

## Project Structure
```
online-platform
├── src
│   ├── api
│   │   ├── endpoints
│   │   │   └── user_reviews.py
│   │   └── __init__.py
│   ├── features
│   │   ├── screen_recording.py
│   │   ├── user_reviews.py
│   │   └── group_feature.py
│   ├── main.py
│   └── utils
│       └── __init__.py
├── requirements.txt
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd online-platform
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage
- To start the application, run:
  ```
  python src/main.py
  ```
- Access the API documentation and endpoints for user reviews and other features.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.