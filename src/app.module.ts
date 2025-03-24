import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogModule,
    PodcastsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
})
export class AppModule {}
