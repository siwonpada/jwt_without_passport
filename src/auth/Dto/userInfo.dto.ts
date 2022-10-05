import { IsNumber, IsString } from "class-validator";

export class UserInfoDto {
    @IsString()
    Username: string;

    @IsNumber()
    UserId: number;
}