import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
  Query, Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './schemas/blog.schema';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateBlogDto } from './dto/update-blog-dto';

@Controller('/blogs')
export class BlogController {
  constructor(private blogServices: BlogService) {}
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateBlogDto) {
    const { picture } = files;
    return this.blogServices.create(dto, picture[0]);
  }
  @Get()
  getAllPosts(@Query('count') count: number, @Query('offset') offset: number): Promise<Blog[]> {
    return this.blogServices.getAllPosts(count, offset);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.blogServices.getOnePost(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log('id');
    console.log(id);
    return this.blogServices.deleteArticle(id);
  }
  @Put(':id')
  updateArticle(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogServices.updateArticle(id, updateBlogDto);
  }
  @Put('/updatePicture/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  updatePictureArticle(@Param('id') id: string, @UploadedFiles() files ) {
    const { picture } = files;
    return this.blogServices.updatePicture(id, picture[0]);
  }

}
