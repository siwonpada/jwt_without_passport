import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
    constructor(private readonly authService: AuthService){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const Request = context.switchToHttp().getRequest()
        Request.user = this.authService.validateUser(Request.body.jwt)
        return next.handle();
    }
}