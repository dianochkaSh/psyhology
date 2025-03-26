import { Injectable } from '@nestjs/common';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private BlogModel: Model<BlogDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateBlogDto, picture): Promise<Blog> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    console.log(picturePath);
    const post = await this.BlogModel.create({
      ...dto,
      listens: 0,
      picture: picturePath,
    });
    return post;
  }
  async getAllPosts(count = 10, offset = 0): Promise<Blog[]> {
    const posts = await this.BlogModel.find().skip(offset).limit(count);
    return posts;
  }

  async getOnePost(id: ObjectId) {
    const post = await this.BlogModel.findById(id);
    return post;
  }

  delete(id: ObjectId) {
    const post = this.BlogModel.findByIdAndDelete(id);
    return post;
  }
}
