import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

import {
  usePostById,
  usePostByUserId,
  usePosts,
  useUpdatePostById,
} from '@/features/posts/hooks/api';
import { useCreatePost, useUserById } from '@/features/posts/hooks/graphql';
import { usePostsStore } from '@/features/posts/store/usePostStore';
import { useModalStore } from '@/store/useModalStore';
import { MODAL_TYPE } from '@/lib/modalRegistry';

import type { Post } from '@/features/posts/types';

export const PostsScreen = () => {
  const { openModal } = useModalStore((state) => state);

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useUserById({ variables: { input: 1 } });
  console.log('user', userData, userIsLoading, userError, useUserById.getKey());

  const { data: postsData, isLoading: postsIsLoading, error: postsError } = usePosts();
  console.log('posts', postsData, postsIsLoading, postsError, usePosts.getKey());

  const { post, setPost } = usePostsStore((state) => state);
  console.log('poststore', post);

  const variablesPostById = { postId: '1' };
  const {
    data: postByIdData,
    isLoading: postByIdIsLoading,
    error: postByIdError,
  } = usePostById({ variables: variablesPostById });
  console.log(
    'postById',
    postByIdData,
    postByIdIsLoading,
    postByIdError,
    usePostById.getKey(variablesPostById)
  );

  const variablesPostByUserId = { queryString: 'userId=2' };
  const {
    data: postByUserIdData,
    isLoading: postByUserIdIsLoading,
    error: postByUserIdError,
  } = usePostByUserId({ variables: variablesPostByUserId });
  console.log(
    'postByUserId',
    postByUserIdData,
    postByUserIdIsLoading,
    postByUserIdError,
    usePostByUserId.getKey(variablesPostByUserId)
  );

  const { mutate: updatePostByIdMutate } = useUpdatePostById({
    onSettled: (data, error, body) => {
      console.log('useUpdatePostById onSettled', data, error, body, useUpdatePostById.getKey());
    },
  });

  const { mutate: createPostMutate } = useCreatePost({
    onSettled: (data, error, body) => {
      console.log('useCreatePost onSettled', data, error, body, useCreatePost.getKey());
    },
  });

  const onPressUpdateHandler = () => {
    const updatePostByIdVariables = {
      postId: '2',
      body: {
        userId: 3,
        title: 'title updated',
        id: 2,
        body: 'body updated',
      },
    };
    updatePostByIdMutate(updatePostByIdVariables);
    const createPostVariables = {
      input: {
        title: 'title 2',
        body: 'body 2',
        userId: 1,
      },
    };
    createPostMutate(createPostVariables);
    setPost(postByIdData as Post);
  };

  const openModalExample = () => {
    openModal({
      modalType: MODAL_TYPE.EXAMPLE_MODAL,
      modalProps: {},
    });
  };

  return (
    <View>
      <Text>posts</Text>
      <Button className="mx-auto text-primary-foreground" onPress={onPressUpdateHandler}>
        <View>
          <Text>Update</Text>
        </View>
      </Button>
      <Button
        variant="ghost"
        className="mx-2 mt-2 border border-primary"
        onPress={() => openModalExample()}>
        <Text>Open</Text>
      </Button>
    </View>
  );
};
