import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail, IsString } from '@nestjs/class-validator';

export type UserDocument = HydratedDocument<User>;

export class User {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
