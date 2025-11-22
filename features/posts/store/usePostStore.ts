import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createMMKVStorage } from '@/utils/mmkv-storage';
import { Post, Posts, PostUpdate } from '@/features/posts/types';

interface PostsState {
  posts: Posts;
  post: Post | null;
}

interface PostsActions {
  setPosts: (posts: Posts) => void;
  removePosts: () => void;
  setPost: (post: Post) => void;
  removePost: () => void;
  updatePost: (post: PostUpdate) => void;
}

type PostsStore = PostsState & PostsActions;

const initialState: PostsState = {
  posts: [],
  post: null,
};

export const usePostsStore = create<PostsStore>()(
  persist(
    devtools(
      immer((set) => ({
        ...initialState,

        setPosts(posts) {
          set((state) => {
            state.posts = posts;
          });
        },

        removePosts() {
          set((state) => {
            state.posts = [];
          });
        },

        setPost(post) {
          set((state) => {
            state.post = post;
          });
        },

        removePost() {
          set((state) => {
            state.post = null;
          });
        },

        updatePost(post) {
          set((state) => {
            if (state.post) {
              state.post = { ...state.post, ...post };
            } else {
              state.post = post as Post;
            }
          });
        },
      }))
    ),
    {
      name: 'posts-storage',
      storage: createMMKVStorage(),
      // skipHydration: true,
      // Optional: whitelist or blacklist keys to persist
      // partialize: (state) => ({ post: state.post }),
    }
  )
);
