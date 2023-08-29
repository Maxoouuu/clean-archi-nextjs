import { Post } from '../entities/Post';

export interface IPostRepository {
  create(post: Post): Post;
  findAll(): Post[];
  findById(id: string): Post | null;
  delete(id: string): void;
}
