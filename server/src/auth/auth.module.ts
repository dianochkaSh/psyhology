import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy } from './local.strategy';
import { User, UserSchema } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';
import { Session } from './session';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import 'dotenv/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, Session, UserService],
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
  ],
})
export class AuthModule {}
