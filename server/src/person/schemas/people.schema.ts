import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PeopleDocument = HydratedDocument<People>;

@Schema()
export class People {
  @Prop()
  name: string;

  @Prop()
  education: string;

  @Prop()
  description: string;

  @Prop()
  photo: string;

  @Prop()
  format_consultation: string;

  @Prop()
  time_consultation: string;

  @Prop()
  phone: string;
}

export const PeopleSchema = SchemaFactory.createForClass(People);
