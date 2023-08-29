import { Post } from '../entities/Post';

export const formatPost = (post: Post) => {
  return {
    ...post,
    dateCreated: post.dateCreated.toLocaleDateString(),
  };
};
