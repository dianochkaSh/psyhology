import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PodcastsDocument = HydratedDocument<Podcasts>;

@Schema()
export class Podcasts {
  @Prop()
  title: string;

  @Prop()
  track: string;
}

export const PodcastsSchema = SchemaFactory.createForClass(Podcasts);
