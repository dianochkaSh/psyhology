import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  education: string;

  @Prop()
  description: string;

  @Prop()
  photo: string;

  @Prop()
  login: string;

  @Prop()
  passHash: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
