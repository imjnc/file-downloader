# File Downloader

## Description

File Downloader is a simple web application that allows users to download any file from the internet by pasting the file's URL. The app supports downloading images, videos, and PDFs. It is built using vanilla JavaScript, HTML, and CSS.

## Features

- Download files by pasting the URL into the input field.
- Supports various file types including images, videos, and PDFs.
- Provides a user-friendly interface with a modern design.

## How It Works

1. **Input URL**: The user pastes the URL of the file they want to download into the input field.
2. **Download File**: The user clicks the "Download File" button to initiate the download.
3. **Fetch and Download**: The app fetches the file from the provided URL and triggers a download in the browser.

## Installation

To get started with File Downloader, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/imjnc/file-downloader.git
   ```
   
2. **Navigate to the Project Directory**:
   ```bash
   cd file-downloader
   ```

3. **Open `index.html` in Your Browser**:
   You can simply open `index.html` with a web browser to start using the app.

## File Structure

- `index.html`: The main HTML file that contains the structure of the app.
- `style.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file that handles the file downloading functionality.

## Code Explanation

- **HTML (`index.html`)**: Contains the structure of the app, including a header, a form for user input, and a button to trigger the download.
- **CSS (`style.css`)**: Provides styling for the app, including layout, colors, and typography.
- **JavaScript (`script.js`)**: Contains the logic for handling the file download. It fetches the file from the URL, creates a temporary download link, and triggers the download.

## Usage

1. Open the app in your browser.
2. Paste the URL of the file you wish to download into the input field.
3. Click the "Download File" button to start downloading the file.

## Troubleshooting

- **Failed to Download File**: Ensure that the URL is correct and that the file is accessible. The application will display an alert if the download fails.

## Contributing

If you'd like to contribute to the development of this project, feel free to submit a pull request or open an issue with suggestions or bug reports.