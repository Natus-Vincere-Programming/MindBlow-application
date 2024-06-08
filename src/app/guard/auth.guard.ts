import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../service/user/user.service";

export const authGuard: CanActivateFn = (route, state): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
        const userService = inject(UserService);
        const user = userService.getUser();
        const router = inject(Router);
        user.then(response => {
            if (response === null) {
                router.navigate(['login']).then(() => {
                    resolve(false);
                })
                return;
            }
            console.log(route.url.toString());
            if (response.enabled && route.url.toString() === 'pending') {
                resolve(true);
            } else {
                router.navigate(['login']).then(() => {
                    resolve(false);
                })
            }
        })
    })
};
