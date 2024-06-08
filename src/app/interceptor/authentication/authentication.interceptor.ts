import {HttpInterceptorFn} from '@angular/common/http';
import {JwtService} from "../../service/jwt/jwt.service";
import {inject} from "@angular/core";

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
    const jwtService = inject(JwtService);
    req.headers.set('Authorization', 'Bearer ' + jwtService.getAvailableToken());
    return next(req);
};
