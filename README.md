# Cullexa Picture Manager Web Project

This is the official website for **Cullexa Picture Manager**—an AI-powered photo culling and organization application for Windows. The website serves as a landing page for downloading the desktop app, viewing the installation instructions, and reviewing the privacy policy.

## Tech Stack

- **Core**: React 19 + Vite (modern, fast frontend build tool)
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin for build-time compilation)
- **Icons**: `@tabler/icons-react`
- **Routing**: `react-router-dom` v7
- **Deployment**: Firebase Hosting

## Key Features of the Site

- **Modern Glassmorphic Design**: Clean and vibrant UI featuring gradients, floating background orbs, and glassmorphism styling.
- **Interactive App Showcase**: Features a tabbed panel displaying grid, slider, and comparison views of the desktop app.
- **Detailed Windows Installation Guide**: Easy-to-follow instructions with screenshots to help users install the application and safely bypass Windows Defender SmartScreen warnings.
- **Responsive Layout**: Designed to look premium across desktops, tablets, and mobile devices.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Local Development

1. **Clone the repository** (if not already local).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:5173/`.

### Production Build

To build the static files for production, run:
```bash
npm run build
```
The optimized bundle will be generated in the `dist` folder.

## Deployment

The site is configured for hosting on **Firebase**. 

To deploy to Firebase Hosting:

1. Ensure you have the Firebase CLI installed and are logged in (`firebase login`).
2. Run the deployment command:
   ```bash
   firebase deploy
   ```
   *(Note: The `firebase.json` file is pre-configured to automatically install dependencies and run a build using a predeploy script.)*

## Project Structure

```text
├── public/                 # Static assets
│   └── assets/             # Images, screenshots, and logos
├── src/
│   ├── components/         # Reusable React UI components (Hero, Features, Showcase, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Shared utilities or libraries
│   ├── pages/              # Page layouts (Home, PrivacyPolicy, InstallGuide)
│   ├── App.jsx             # Main Application component with routing
│   ├── index.css           # Global Tailwind and custom styles
│   └── main.jsx            # React mounting point
├── firebase.json           # Firebase Hosting configuration
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite config including Tailwind plugin
```
