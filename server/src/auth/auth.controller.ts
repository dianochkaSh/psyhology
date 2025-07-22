import {
  Controller,
  Post,
  Response,
  Req,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  login(@Body() dto: CreateUserDto, @Response({ passthrough: true }) res){
    return this.authService.login(dto, res);
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
