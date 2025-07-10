import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async findUserByLogin(login: string): Promise<any> {
    const user = await this.userModel.findOne({ login }).lean();
    const userAsUser = user as User;
    return userAsUser;
  }

  async createUser(dto: CreateUserDto) {
    console.log(dto);
   const user = await this.userModel.findOne({ login: dto.login }).lean();

    if (user === null) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const newUser = new User() as UserDocument;
        newUser.password = hashedPassword,
        newUser.login = dto.login;
        newUser.email = dto.email;
       const newUser1 = await this.userModel.create({
         login: newUser.login,
         email: newUser.email,
         password: newUser.password
       });

        return newUser1;
    }
  }
}
