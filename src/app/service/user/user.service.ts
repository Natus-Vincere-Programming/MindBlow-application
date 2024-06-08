import {Injectable} from '@angular/core';
import {apiUrl} from "../../utility/storage";
import {HttpClient} from "@angular/common/http";
import {UserResponse} from "./user-response";
import {AuthenticationService} from "../authentication/authentication.service";
import {JwtService} from "../jwt/jwt.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = apiUrl + '/users';

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService,
        private jwtService: JwtService
    ) {
    }

    getUser(): Promise<UserResponse | null> {
        return new Promise((resolve) => {
            this.http.get<UserResponse>(this.url + "?token=" + this.jwtService.getAccessToken()).subscribe({
                next: (response: UserResponse) => {
                    resolve(response);
                },
                error: (err) => {
                    resolve(null);
                }
            });
        });
    }
}
