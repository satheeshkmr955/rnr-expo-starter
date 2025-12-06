import { createMutation, createQuery } from 'react-query-kit';

import { customFetcher } from '@/lib/graphql';
import { CreatePost, GetUserById } from '@/features/posts/services/query';

import type { QueryUserByIdArgs } from '@/features/posts/types';
import type {
  CreatePostMutation,
  CreatePostMutationVariables,
  GetUserByIdQuery,
} from '@/gql/graphql';

export const useUserById = createQuery<GetUserByIdQuery, QueryUserByIdArgs>({
  queryKey: ['useUserById'],
  fetcher: async (variables) => {
    return await customFetcher(GetUserById, variables);
  },
});

export const useCreatePost = createMutation<CreatePostMutation, CreatePostMutationVariables>({
  mutationKey: ['useCreatePost'],
  mutationFn: async (variables) => {
    return await customFetcher(CreatePost, variables);
  },
});
