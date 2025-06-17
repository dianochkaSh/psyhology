import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Collection, Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async findUserByLogin(login: string): Promise<any> {
    const user = await this.userModel.findOne({ login }).lean();;
    const userAsUser = user as User;
    return userAsUser;
  }
}
