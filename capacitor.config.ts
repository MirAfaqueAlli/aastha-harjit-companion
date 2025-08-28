import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c614768bc57347f0a060fbcf8cc304f6',
  appName: 'aastha-harjit-companion',
  webDir: 'dist',
  server: {
    url: 'https://c614768b-c573-47f0-a060-fbcf8cc304f6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera']
    }
  }
};

export default config;