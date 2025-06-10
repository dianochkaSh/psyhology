import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { Treatment } from './schemas/treatment.schema';
import { ObjectId } from 'mongoose';

@Controller('treatment')
export class TreatmentController {
  constructor(
    private treatmentService: TreatmentService) {}
  @Get()
  getAllTreatments(): Promise<Treatment[]> {
    return this.treatmentService.getAllRecordTreatment();
  }

  @Post()
  addNewTreatment(@Body() dto: CreateTreatmentDto){
    return this.treatmentService.addRecordTreatment(dto);
  }

  @Delete(':id')
  deleteRecordTreatment(@Param('id') id: ObjectId) {
    return this.treatmentService.deleteRecordTreatment(id);
  }
}
