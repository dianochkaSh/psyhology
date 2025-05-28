import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

/*modules*/
import { ProblemModule } from './problem/problem.module';
import { FileModule } from './file/file.module';
import { BlogModule } from './blog/blog.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { PersonModule } from './person/person.module';
import { CertificateModule } from './certificate/certificate.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    PersonModule,
    BlogModule,
    PodcastsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    FileModule,
    ProblemModule,
    CertificateModule,
  ],
})
export class AppModule {}
