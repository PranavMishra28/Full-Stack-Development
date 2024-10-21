# React Video Call App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project is designed to facilitate real-time video communication over the web. It aims to provide a seamless and user-friendly interface for video calls, making it easy for users to connect with others. The project was initiated to explore the capabilities of WebRTC and React in building modern communication tools. It is built using React for the frontend and Node.js for the backend, with WebRTC for real-time communication.

## Features
- **Real-time Video Calls**: Connect with others instantly using WebRTC.
- **Chat Functionality**: Send and receive messages during a call.
- **Screen Sharing**: Share your screen with other participants.
- **Recording**: Record your video calls for later review.
- **Integration with External Services**: Connect with services like Firebase for authentication and data storage.

## Installation

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm are installed on your machine.
- A modern web browser that supports WebRTC.
- [Optional] An account on Firebase for authentication and database services.

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/PranavMishra28/react-video-call-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd react-video-call-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage
To use this project, follow these steps:

### Running the Application
1. **Start the server**:
   ```bash
   npm start
   ```
2. **Open your browser** and navigate to `http://localhost:3000`.

### Example
Here's an example of how to use the application:
1. Open the application.
2. Sign in using your credentials.
3. Start a new video call or join an existing one.
4. Use the chat feature to communicate via text.
5. Share your screen if needed.

## Configuration
The project can be configured using the following options:

- **Environment Variables**: Set up the following variables in your `.env` file:
  - `REACT_APP_FIREBASE_API_KEY`: Your Firebase API key.
  - `REACT_APP_FIREBASE_AUTH_DOMAIN`: Firebase Auth domain.
  - `REACT_APP_FIREBASE_PROJECT_ID`: Firebase project ID.

- **Configuration Files**: Modify `config.json` to change settings:
  ```json
  {
    "videoQuality": "high",
    "maxParticipants": 4
  }
  ```

## Contributing
We welcome contributions! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code adheres to our coding standards and includes tests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or feedback, please contact us:

- **Email**: [mishrapranav82@gmail.com](mailto:mishrapranav82@gmail.com)
- **GitHub**: [PranavMishra28](https://github.com/PranavMishra28)

We appreciate your interest and contributions to this project!