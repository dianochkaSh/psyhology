import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import * as process from 'process';
import * as session from 'express-session';
import 'dotenv/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.use(
      session({
        secret: process.env.SESSION_SECRET as string,
        resave: Boolean(process.env.SESSION_RESAVE),
        saveUninitialized: Boolean(process.env.SESSION_SAVE_UNINITIALIZED),
        cookie: {
          maxAge: 30 * 24 * 60 * 60, // 30 days
        },
      }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
    await app.listen(process.env.PORT ?? 3002);
  } catch (e) {
    console.log(e);
  }
}
//
//"start:dev": "npm run copy:assets && nest start --watch",s
bootstrap();
