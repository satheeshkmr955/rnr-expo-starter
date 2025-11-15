import { View } from 'react-native';

import { usePostById, usePostByUserId, usePosts, useUpdatePostById } from '@/features/posts/hooks';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

export const PostsScreen = () => {
  const { data: postsData, isLoading: postsIsLoading, error: postsError } = usePosts();

  console.log('posts', postsData, postsIsLoading, postsError, usePosts.getKey());

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

  const { mutate } = useUpdatePostById({
    onSettled: (data, error, body) => {
      console.log('onSettled', data, error, body, useUpdatePostById.getKey());
    },
  });

  const onPressUpdateHandler = () => {
    const variables = {
      postId: '2',
      body: {
        userId: 3,
        title: 'title updated',
        id: 2,
        body: 'body updated',
      },
    };
    mutate(variables);
  };

  return (
    <View>
      <Text>posts</Text>
      <Button className="mx-auto text-primary-foreground" onPress={onPressUpdateHandler}>
        <View>
          <Text>Update</Text>
        </View>
      </Button>
    </View>
  );
};
