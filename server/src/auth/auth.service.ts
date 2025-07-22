import { HttpStatus, Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';
import { Request, Response } from 'express';

import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(login: string, password: string): Promise<any> {
    const user: User = await this.userService.findUserByLogin(login);
    if (!user) {
      return { "status": false, "message": "Invalid email or password!" };
      //throw new UnauthorizedException();
    }
    if (user && user.password === password) {
      return { "status": true, "payload": user };
    }
  }
  async login(userDto: CreateUserDto, res) {
    const user = await this.validateUser(userDto.login, userDto.password);

    const payload = { sub: user.payload._id, name: user.payload.login };
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.JWT_EXPIRESIN,
      secret: process.env.JWT_SECRET,
    });
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
    });
    res.send({
      access_token: access_token,
      message: 'Login Successful!',
    });
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
