import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProblemDocument = Problem & Document;

@Schema()
export class Problem {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  img: string;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
