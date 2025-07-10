import {
  Controller,
  Post,
  UseGuards,
  Req, Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/schemas/user.schema';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req): Promise<any> {
    console.log('login-controller');
    return this.authService.login(req);
  }

  @Post('logout')
  logout(@Req() request: Request): Promise<any> {
    return this.authService.logout(request);
  }
  @Post('signUp')
  registrationUser(@Body() dto: CreateUserDto) {
   return this.userService.createUser(dto);

  }
}
