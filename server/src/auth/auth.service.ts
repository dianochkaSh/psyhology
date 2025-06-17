import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userService: UserService,
  ) {}
  async validateUser(login: string, password: string): Promise<any> {
    const user: User = await this.userService.findUserByLogin(login);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (user && user.password === password) {
      return user;
    }
  }
}
