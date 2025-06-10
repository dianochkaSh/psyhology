import { Module } from '@nestjs/common';
import { TreatmentController } from './treatment.controller';
import { TreatmentService } from './treatment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Treatment, TreatmentSchema } from './schemas/treatment.schema';

@Module({
  controllers: [TreatmentController],
  providers: [TreatmentService],
  imports: [
    MongooseModule.forFeature([
      { name: Treatment.name, schema: TreatmentSchema },
    ]),
  ],
})
export class TreatmentModule {}
