import { QueryClient, QueryClientProvider, QueryKey, onlineManager } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import { ReactNode } from 'react';
import { DevToolsBubble } from 'react-native-react-query-devtools';
import { setStringAsync } from 'expo-clipboard';

export const onCopy = async (text: string) => {
  try {
    await setStringAsync(text);
    return true;
  } catch {
    return false;
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

export type TanStackQueryProviderProps = {
  children: ReactNode | null;
};

export type GetQueryKeyProps = {
  apiName: string;
  queryString?: string | null;
  payload?: any;
};

export const TanStackQueryProvider = (obj: TanStackQueryProviderProps) => {
  const { children = null } = obj || {};
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <DevToolsBubble onCopy={onCopy} queryClient={queryClient} />
    </QueryClientProvider>
  );
};

export const getQueryKey = (obj: GetQueryKeyProps): QueryKey => {
  const queryKey = [];
  const { apiName = '', queryString = null } = obj || {};

  queryKey.push(apiName);

  if (queryString !== null) {
    queryKey.push(queryString);
  }

  if (obj.payload) {
    queryKey.push(obj.payload);
  }

  return queryKey;
};
