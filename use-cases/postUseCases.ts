import { Post } from '../entities/Post';
import { IPostRepository } from '../repositories/IPostRepository';

export const createPost = (repo: IPostRepository, post: Post) => {
  return repo.create(post);
};

export const getPosts = (repo: IPostRepository) => {
  return repo.findAll();
};

export const getPostById = (repo: IPostRepository, id: string) => {
  return repo.findById(id);
};

export const deletePost = (repo: IPostRepository, id: string) => {
  return repo.delete(id);
};
