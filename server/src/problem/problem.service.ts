import { Injectable } from '@nestjs/common';
import { Problem, ProblemDocument } from './schemas/problem.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProblemDto } from './dto/create-problem.dto';

@Injectable()
export class ProblemService {
  constructor(
    @InjectModel(Problem.name) private ProblemModel: Model<ProblemDocument>,
  ) {}
  async getAllPost(): Promise<Problem[]> {
    const posts = await this.ProblemModel.find();
    return posts;
  }
  async create(dto: CreateProblemDto): Promise<Problem> {
    const problem = await this.ProblemModel.create({
      ...dto,
    });
    return problem;
  }
  async delete(id: ObjectId){
    return this.ProblemModel.findByIdAndDelete(id);
  }
}
