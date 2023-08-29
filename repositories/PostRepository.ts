import { Post } from '../entities/Post';
import { IPostRepository } from './IPostRepository';

export class PostRepository implements IPostRepository {
  private posts: Post[] = [];

  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findById(id: string): Post | null {
    return this.posts.find((post) => post.id === id) || null;
  }

  delete(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
