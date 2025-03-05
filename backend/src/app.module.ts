import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    PostsModule,
  ],
})
export class AppModule {}
