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

  async validateJwt(jwt: string): Promise<boolean> {
    try{
      const userInfo = this.jwtService.verify(jwt);
      return true
    } catch(e){
      return false
    }
  }

  async validateUser(jwt: string): Promise<UserInfoDto|null> {
    const decodeJwt = this.jwtService.verify(jwt);
    const userInfo = {Username: decodeJwt.Username, UserId:decodeJwt.UserId}
    return userInfo
  }
}
