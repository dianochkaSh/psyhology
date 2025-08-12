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
  @Prop()
  create_time: Date;
  @Prop()
  is_deleted: boolean;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
