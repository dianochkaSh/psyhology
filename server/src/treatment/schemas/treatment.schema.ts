import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TreatmentDocument = HydratedDocument<Treatment>;

@Schema()
export class Treatment {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  phone: string;

  @Prop()
  isNew: boolean;

  @Prop()
  isWork: boolean;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);
