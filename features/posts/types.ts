export type Posts = Post[];

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostByIdVariables = { postId: string };

export type PostByUserIdVariables = { queryString: string };

export type UpdatePostByIdVariables = { postId: string; body: Post };
