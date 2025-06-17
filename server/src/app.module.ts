import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

/*modules*/
import { ProblemModule } from './problem/problem.module';
import { FileModule } from './file/file.module';
import { BlogModule } from './blog/blog.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { PeopleModule } from './person/people.module';
import { CertificateModule } from './certificate/certificate.module';
import { TreatmentModule } from './treatment/treatment.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    PeopleModule,
    BlogModule,
    PodcastsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    FileModule,
    ProblemModule,
    CertificateModule,
    TreatmentModule,
    AuthModule,
  ],
})
export class AppModule {}
