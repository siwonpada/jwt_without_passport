import { Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserInfoDto } from './Dto/userInfo.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('getJwt')
    async getJwt(@Query('username') username: string, @Query('userId') userId: number): Promise<string> {
        const userInfo: UserInfoDto = {Username:username,UserId:userId};
        return this.authService.getJwt(userInfo);
    }
}
