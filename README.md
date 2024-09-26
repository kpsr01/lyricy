# Lyricy 🎵

**Lyricy** is a web application that allows users to discover their favorite songs by entering a few lines of lyrics. Leveraging the Spotify API, Lyricy provides an intuitive interface for music lovers to find song details quickly and easily.

## Live Demo

Check out the live version of the application at: [lyricy.vercel.app](https://lyricy.vercel.app)

## Features

- **Song Search**: Input any lyrics and retrieve song information including song name, artist name, and album art.
- **Responsive Design**: A mobile-friendly layout that adapts to various screen sizes.
- **Modern UI**: A clean and elegant design that emphasizes usability and aesthetics.

## Tech Stack

- **Frontend**: 
  - React
  - CSS
  - React Spinners for loading animation

- **APIs**: 
  - Spotify API for fetching song details

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Spotify Developer Account to obtain an API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lyricy.git
   cd lyricy

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory and add your Spotify API key:
   ```env
   REACT_APP_SPOTIFY_API_KEY=your_api_key_here
  - To obtain your API key, follow these steps:
  - Go to the Spotify Developer Dashboard.
  - Click on "Create an App."
  - Fill in the required details and click "Create."
  - After creation, you will see your Client ID and Client Secret. Use them as needed for authentication.
4. Start the application:
    ```bash
    npm start

5. Open your web browser and go to http://localhost:3000.
Enter a line or two of lyrics in the input field and click on "Find Song".
View the song name, artist name, and album art displayed on the screen.
