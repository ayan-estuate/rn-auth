import { ExpoConfig } from 'expo/config';

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  name: 'rn-auth',
  slug: 'rn-auth',
  scheme: 'rnauth',
  orientation: 'portrait',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: { supportsTablet: true },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    usesCleartextTraffic: true,
  },
  web: { bundler: 'metro', favicon: './assets/images/favicon.png' },
  experiments: { typedRoutes: true },
  extra: {
    API_URL: 'http://10.10.11.191:8080/api/v1',
    eas: { projectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
  },
});
