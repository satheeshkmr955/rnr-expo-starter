import Reactotron from 'reactotron-react-native';
import reactotronZustand from 'reactotron-plugin-zustand';
import mmkvPlugin from 'reactotron-react-native-mmkv';

import { usePostsStore } from '@/features/posts/store/usePostStore';

import { storage } from '@/utils/mmkv-storage';

import type { ReactotronReactNative } from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'rnr-expo-starter',
  host: 'localhost',
  port: 9090,
})
  .useReactNative({
    asyncStorage: true,
    networking: true,
    editor: true,
    errors: true,
  })
  .use(
    reactotronZustand({
      stores: [{ name: 'posts', store: usePostsStore }],
      omitFunctionKeys: true,
    })
  )
  .use(mmkvPlugin<ReactotronReactNative>({ storage: storage }))
  .connect();

if (reactotron) {
  console.log('Reactotron connected successfully');
} else {
  console.error('Failed to connect Reactotron');
}

export default reactotron;
