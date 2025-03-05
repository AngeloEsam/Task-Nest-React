import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostDocument } from './posts.schema';
import { CreatePostDto } from './posts.dto';
import { isValidObjectId } from 'mongoose';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() postData: CreatePostDto): Promise<PostDocument> {
    return this.postsService.create(postData);
  }

  @Get()
  findAll(): Promise<PostDocument[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    if (!id || !isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const post = await this.postsService.getPostById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }
}
