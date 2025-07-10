import { HttpStatus, Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';
import { Request, Response } from 'express';

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
  async login(@Req() request: Request): Promise<any> {
    console.log('auth service login');
    return {
      message: 'Login successful',
      statusCode: HttpStatus.OK,
    };
  }
  async logout(request: Request): Promise<any> {
    request.session.destroy(() => {
      return {
        message: 'Logout successful',
        statusCode: HttpStatus.OK,
      };
    });
  }
}
