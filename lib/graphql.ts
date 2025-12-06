import { HttpStatusCode } from 'axios';

import { axiosGraphQL } from '@/lib/axios';

import type { TypedDocumentString } from '@/gql/graphql';

export async function customFetcher<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const responseAxios = await axiosGraphQL({
      data: {
        query: document,
        variables: variables,
      },
    });

    if (responseAxios.status !== HttpStatusCode.Ok) {
      const error = `Failed to fetch: ${responseAxios.statusText}. Body: ${responseAxios.request?.responseText}`;
      throw new Error(error);
    }

    return responseAxios?.data?.data as TResult;
  } catch (error) {
    throw new Error('GraphQL fetch failed', { cause: error });
  }
}
