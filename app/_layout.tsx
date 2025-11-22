import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import ToastManager from 'toastify-react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { NAV_THEME } from '@/lib/theme';
import { TanStackQueryProvider } from '@/lib/TanStackQueryProvider';

import '@/global.css';

import { ToastError, ToastInfo, ToastSuccess, ToastWarn } from '@/components/ui/customToast';
import { ToastConfigParams } from 'toastify-react-native/utils/interfaces';

if ((Platform.OS === 'ios' || Platform.OS === 'android') && __DEV__) {
  require('@/utils/ReactotronConfig');
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  const toastConfig = {
    success: (props: ToastConfigParams) => <ToastSuccess {...props} />,
    error: (props: ToastConfigParams) => <ToastError {...props} />,
    info: (props: ToastConfigParams) => <ToastInfo {...props} />,
    warn: (props: ToastConfigParams) => <ToastWarn {...props} />,
    default: (props: ToastConfigParams) => <ToastInfo {...props} />,
  };

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar
        backgroundColor="transparent"
        style={colorScheme === 'dark' ? 'light' : 'dark'}
        translucent
      />
      <TanStackQueryProvider>
        <Stack />
        <PortalHost />
        <ToastManager config={toastConfig} position="top" duration={1500} useModal={false} />
      </TanStackQueryProvider>
    </ThemeProvider>
  );
}
