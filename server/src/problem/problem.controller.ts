import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Problem } from './schemas/problem.schema';
import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ObjectId } from 'mongoose';

@Controller('/problems')
export class ProblemController {
  constructor(private problemService: ProblemService) {}
  @Get()
  getAllListProblems(): Promise<Problem[]> {
    return this.problemService.getAllPost();
  }
  @Post()
  createRecordProblem(@Body() dto: CreateProblemDto){
    return this.problemService.create(dto);
  }
  @Delete(':id')
  deleteRecordProblem(@Param('id') id: ObjectId) {
    return this.problemService.delete(id);
  }
}
