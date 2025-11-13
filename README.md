# TrainMaster App

Cross-platform Expo React Native app for workout tracking and recovery optimization.

## Features

- **Workout Tracking**: Log and monitor your training sessions
- **Recovery Optimization**: Track fatigue, sleep, and recovery metrics
- **Personalized Programs**: AI-driven workout program generation
- **Cross-Platform**: iOS, Android, and Web support via Expo

## Tech Stack

- **Framework**: Expo SDK 50
- **Language**: TypeScript
- **UI Framework**: React Native
- **State Management**: React Hooks
- **Backend**: Supabase (via API)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Trin1t4/train-master-app.git
cd train-master-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Devices

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

## Build & Deployment

### Building for App Stores

Follow the [Expo EAS CLI documentation](https://docs.expo.dev/build/introduction/) to build and submit your app to Google Play and Apple App Store.

```bash
# Install EAS CLI
npm install -g eas-cli

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

### Submitting to Stores

1. **Google Play**: Use Expo's automated submission with `eas submit --platform android`
2. **Apple App Store**: Use Expo's automated submission with `eas submit --platform ios`

## Project Structure

```
├── App.tsx           # Main app component
├── app.json          # Expo configuration
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript configuration
└── assets/           # App icon and splash screen
    ├── icon.png
    └── splash.png
```

## Configuration

Edit `app.json` to customize:
- App name and slug
- iOS bundle identifier: `com.trainsmart.trainmaster`
- Android package: `com.trainsmart.trainmaster`
- App icon and splash screen

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License

## Support

For questions or support, please open an issue on the GitHub repository.
