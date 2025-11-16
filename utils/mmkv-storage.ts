import { StateStorage, createJSONStorage } from 'zustand/middleware';

export const storage: any = {
  set: (name: string, value: string | number | boolean | ArrayBuffer): void => {},
  getString: (key: string): string | undefined => undefined,
  remove: (key: string) => true,
};

const webStorage: StateStorage = {
  getItem: (name: string): string | Promise<string | null> | null => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(name);
    }
    return null;
  },
  setItem: (name: string, value: string | Promise<string>) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(name, value as string);
    }
  },
  removeItem: (name: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(name);
    }
  },
};

export const createMMKVStorage = () => {
  return createJSONStorage(() => webStorage);
};
