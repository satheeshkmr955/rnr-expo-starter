import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

import { NAV_THEME } from '@/lib/theme';
import { TanStackQueryProvider } from '@/lib/TanStackQueryProvider';

import '@/global.css';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <TanStackQueryProvider>
        <Stack />
        <PortalHost />
      </TanStackQueryProvider>
    </ThemeProvider>
  );
}
