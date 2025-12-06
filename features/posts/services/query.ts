import { graphql } from '@/gql';

export const UserDetails = graphql(/* GraphQL */ `
  fragment UserDetails on User {
    id
    name
    email
  }
`);

export const PostDetails = graphql(/* GraphQL */ `
  fragment PostDetails on Post {
    id
    title
    body
  }
`);

export const GetUserById = graphql(/* GraphQL */ `
  query GetUserById($input: Int!) {
    userById(id: $input) {
      ...UserDetails
    }
  }
`);

export const CreatePost = graphql(/* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(post: $input) {
      ...PostDetails
    }
  }
`);
