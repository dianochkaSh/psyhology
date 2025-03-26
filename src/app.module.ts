import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    BlogModule,
    PodcastsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    FileModule,
  ],
})
export class AppModule {}
