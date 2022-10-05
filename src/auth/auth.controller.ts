import { Controller, Get, Post, Query, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
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
    
    @UseGuards(AuthGuard)
    @UseInterceptors(AuthInterceptor)
    @Post('testjwt')
    async testjwt(@Req() req){
        return req.user;
    }
}
