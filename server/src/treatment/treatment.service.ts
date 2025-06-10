import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Treatment, TreatmentDocument } from './schemas/treatment.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateTreatmentDto } from './dto/create-treatment.dto';

@Injectable()
export class TreatmentService {
  constructor(
    @InjectModel(Treatment.name)
    private treatmentModel: Model<TreatmentDocument>
  ) {}

  getAllRecordTreatment(): Promise<Treatment[]> {
    return this.treatmentModel.find();
  }

  addRecordTreatment(dto: CreateTreatmentDto) {
    const record = this.treatmentModel.create({
      ...dto,
      isWork: false,
      isNew: true,
    });
    return record;
  }
  updateRecordTreatment(id) {

  }

  deleteRecordTreatment(id: ObjectId) {
    const record = this.treatmentModel.findByIdAndDelete(id);
    return record;
  }
}
