import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationOptions } from 'expo-router/build/global-state/routing';

export type RootStackParamList = {
  index: undefined; // The route for app/index.tsx
  details: { itemId: string };
  settings: undefined;
  // Add all your route names here...
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  // This is the key: TypeScript infers the correct param type for the given RouteName
  params: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    // We cast to string and NavigationOptions to satisfy the underlying library structure
    navigationRef.navigate(name as string, params as NavigationOptions);
  }
}
