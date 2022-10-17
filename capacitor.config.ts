import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'egora.gamefi',
  appName: 'egora-gamefi',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url:'192.168.1.182:3000',
    cleartext: true
  }
};

export default config;
