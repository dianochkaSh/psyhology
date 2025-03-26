import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  picture: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
