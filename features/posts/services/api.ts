import { axiosInstance } from '@/lib/axios';
import { POSTS_API } from '@/constants/api';
import { Post } from '../types';

export const getPosts = async () => {
  try {
    const response = await axiosInstance.get(`${POSTS_API}`);
    // console.log('POSTS_API response', response);
    return response.data;
  } catch (error) {
    // console.error('POSTS_API error', error);
    return null;
  }
};

export const getPostsByUserId = async ({ queryString }: { queryString: string }) => {
  try {
    const response = await axiosInstance.get(`${POSTS_API}?${queryString}`);
    // console.log('POSTS_API response', response);
    return response.data;
  } catch (error) {
    // console.error('POSTS_API error', error);
    return null;
  }
};

export const getPostById = async ({ postId }: { postId: string }) => {
  try {
    const response = await axiosInstance.get(`${POSTS_API}/${postId}`);
    // console.log('POSTS_API response', response);
    return response.data;
  } catch (error) {
    // console.error('POSTS_API error', error);
    return null;
  }
};

export const updatePostById = async ({ postId, body }: { postId: string; body: Post }) => {
  try {
    const response = await axiosInstance.put(`${POSTS_API}/${postId}`, body);
    // console.log('POSTS_API response', response);
    return response.data;
  } catch (error) {
    // console.error('POSTS_API error', error);
    return null;
  }
};
