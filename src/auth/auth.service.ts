import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserInfoDto } from './Dto/userInfo.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async getJwt(payload: UserInfoDto): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
