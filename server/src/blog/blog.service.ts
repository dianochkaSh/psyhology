import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { FileService, FileType } from '../file/file.service';
import { UpdateBlogDto } from './dto/update-blog-dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private BlogModel: Model<BlogDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateBlogDto, picture): Promise<Blog> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const post = await this.BlogModel.create({
      ...dto,
      listens: 0,
      picture: picturePath,
    });
    return post;
  }
  async getAllPosts(count = 10, offset = 0): Promise<Blog[]> {
    const posts = await this.BlogModel.find({
      is_deleted: false }).skip(offset).limit(count);
    console.log(posts);
    return posts;
  }

  async getOnePost(id: ObjectId) {
    const post = await this.BlogModel.findById(id);
    return post;
  }

  async deleteArticle(id: string) {
    const post = await this.BlogModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true }},
      { new: true, upsert: true }
    );
    return post;
  }
  async updateArticle(id: string, updateArticleDto: UpdateBlogDto) {
    const article = await this.BlogModel.findOneAndUpdate({_id: id}, updateArticleDto)
      .setOptions({ overwrite: true, new: true })
      .populate('title')
      .populate('description');
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }
  async updatePicture(id: string, picture) {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const updateRecord = { picture: picturePath };
    const article = await this.BlogModel.findOneAndUpdate({_id: id}, updateRecord).setOptions({ overwrite: true, new: true });
    return article;
  }
}
