import { createMutation, createQuery } from 'react-query-kit';

import { getPostById, getPosts, getPostsByUserId, updatePostById } from '../services/api';
import {
  Post,
  Posts,
  PostByIdVariables,
  UpdatePostByIdVariables,
  PostByUserIdVariables,
} from '../types';

export const usePosts = createQuery<Posts>({
  queryKey: ['POSTS_API'],
  fetcher: async () => {
    return await getPosts();
  },
});

export const usePostById = createQuery<Post, PostByIdVariables>({
  queryKey: ['POSTS_API'],
  fetcher: async (variables) => {
    return await getPostById(variables);
  },
});

export const usePostByUserId = createQuery<Post, PostByUserIdVariables>({
  queryKey: ['POSTS_API'],
  fetcher: async (variables) => {
    return await getPostsByUserId(variables);
  },
});

export const useUpdatePostById = createMutation<Post, UpdatePostByIdVariables>({
  mutationKey: ['UPDATE_POSTS_API'],
  mutationFn: async (variables) => {
    return await updatePostById(variables);
  },
});
