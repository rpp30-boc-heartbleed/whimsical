import 'dotenv/config';

export default {
  expo: {
    name: 'whimsical',
    owner: 'heartbleed',
    slug: 'whimsical',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/favicon.png',
    splash: {
      image: './assets/icons/bagel-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: 'AIzaSyCfs9-NoMSC1HooTgUS8wtbd4c7nACgf20',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/favicon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
