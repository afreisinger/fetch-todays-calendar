# Fetch Today's Calendar

A Node.js script that interacts with the Google Calendar API to fetch today's events. The script supports multiple calendars, JSON output, and saving event data to a file.

## Features

- Fetch events from all calendars or a specific calendar.
- Save events in JSON format to a local file.
- Display events in a readable format.
- Specify custom configuration and data storage paths using environment variables.

## Prerequisites

- Node.js (version <21)
- NPM (version <11)
- A Google Cloud project with Calendar API enabled.
- OAuth2 credentials (saved as `credentials.json`).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/fetch-today-calendar.git
   cd fetch-today-calendar

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create necessary directories and files:

- Ensure you have a credentials.json file in the configuration directory (~/.config/fetch-today-calendar by default).
- The directory structure can be customized using environment variables (see below).

## Configuration

The script uses environment variables for paths:

- APP_CONFIG_DIR: Path to the configuration directory (default: ~/.config/fetch-today-calendar).
- APP_DATA_DIR: Path to the data storage directory (default: ~/.local/share/fetch-today-calendar).

You can set these variables in a .env file:

```env
APP_CONFIG_DIR=.config/fetch-today-calendar
APP_DATA_DIR=.local/share/fetch-today-calendar
```

## Usage

### CLI Options

Run the script with the following options:

```bash
node app.js [options]
```

Available options:

- --json: Output events in JSON format.
- --json-save: Save events to the data file.
- --data-location: Print the path to the data file.
- --calendar <name>: Filter events by a specific calendar name

### Example

Fetch and print today's events

```bash
node app.js
```

Fetch and print today's events in JSON format:

```bash
node app.js --json
```

Save today's events to the data file:

```bash
node app.js --json-save
```

## Authentication

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the Calendar API for your project.
3. Create OAuth 2.0 credentials and download the JSON file.
4. Save the credentials as credentials.json in the configuration directory.

The script will automatically handle the OAuth flow and save a token.json file after authentication.
