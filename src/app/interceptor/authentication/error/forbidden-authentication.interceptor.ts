import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, of} from "rxjs";
import {JwtService} from "../../../service/jwt/jwt.service";
import {inject} from "@angular/core";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {Router} from "@angular/router";

export const forbiddenAuthenticationInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
            const jwtService = inject(JwtService);
            const authenticationService = inject(AuthenticationService);
            const router = inject(Router);
            jwtService.removeAccessToken();
            authenticationService.refreshToken().then((response) => {
                if (response === null) {
                    jwtService.removeTokens();
                    router.navigate(['/login']);
                    return;
                }
                jwtService.saveTokens(response.access_token, response.refresh_token);
            })
        }
        return of(error.error)
    }));
};
