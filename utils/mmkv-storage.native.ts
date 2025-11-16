import { createMMKV } from 'react-native-mmkv';
import { StateStorage, createJSONStorage } from 'zustand/middleware';

export const storage = createMMKV();

const zustandMMKVStorage: StateStorage = {
  setItem: (name, value) => {
    storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    storage.remove(name);
  },
};

export const createMMKVStorage = () => {
  return createJSONStorage(() => zustandMMKVStorage);
};
