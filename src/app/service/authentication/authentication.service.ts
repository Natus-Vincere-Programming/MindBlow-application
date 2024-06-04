import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getApiUrl} from "../../app.config";
import {AuthenticationResponse} from "./authentication-response";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly url: string = getApiUrl() + '/auth';

    constructor(private http: HttpClient) {
    }

    authenticate(email: string, password: string, remember: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            this.http.post<AuthenticationResponse>(this.url + "/authenticate", {
                email,
                password
            }).subscribe({
                next: (response: AuthenticationResponse): void => {
                    if (response == undefined || response.access_token == undefined || response.refresh_token == undefined) {
                        resolve(false);
                        return;
                    }
                    if (remember) {
                        localStorage.setItem('access_token', response.access_token);
                        localStorage.setItem('refresh_token', response.refresh_token);
                    } else {
                        sessionStorage.setItem('access_token', response.access_token);
                        sessionStorage.setItem('refresh_token', response.refresh_token);
                    }
                    resolve(true);
                },
                error: (err) => {
                    resolve(false);
                }
            });
        });
    }

    refreshToken(): Promise<boolean> {
        return new Promise((resolve) => {
            this.http.post<AuthenticationResponse>(this.url + "/refresh-token",'', {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('refresh_token')
                }
            }).subscribe({
                next: (response: AuthenticationResponse): void => {
                    if (response == undefined || response.access_token == undefined || response.refresh_token == undefined) {
                        resolve(false);
                        return;
                    }
                    localStorage.setItem('access_token', response.access_token);
                    localStorage.setItem('refresh_token', response.refresh_token);
                    resolve(true);
                },
                error: (err) => {
                    resolve(false);
                }
            });
        });
    }
}
