import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './posts.schema';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(postData: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(postData);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async getPostById(id: string): Promise<Post | null> {
    return this.postModel.findById(id).exec();
  }
}
