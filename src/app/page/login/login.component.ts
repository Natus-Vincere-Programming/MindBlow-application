import {Component} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {MatCheckbox} from "@angular/material/checkbox";
import {
    AbstractControl,
    FormControl,
    FormGroupDirective,
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    Validators
} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {merge} from "rxjs";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        MatLabel,
        NgOptimizedImage,
        MatFormField,
        MatInput,
        MatIcon,
        MatIconButton,
        RouterLink,
        MatCheckbox,
        MatButton,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgIf
    ],
    providers: [AuthenticationService, Router],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email: FormControl = new FormControl('', [Validators.required, Validators.email]);
    password: FormControl = new FormControl('', [Validators.required]);
    rememberMe: FormControl = new FormControl(false);
    hidePassword: boolean = true;
    errorMessageEmail: string = '';
    errorMessagePassword: string = '';
    invalidCredentials: boolean = false;
    errorMessageInvalidCredentials: string = '';
    errorMatcher: ErrorMatcher = new ErrorMatcher(this.invalidCredentials);

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        merge(this.email.statusChanges, this.email.valueChanges)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateErrorMessageEmail());
        merge(this.password.statusChanges, this.password.valueChanges)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateErrorMessagePassword());
    }

    clickEvent(event: MouseEvent) {
        this.hidePassword = !this.hidePassword;
        event.stopPropagation();
    }

    protected updateErrorMessageEmail() {
        if (this.email.hasError('required')) {
            this.errorMessageEmail = 'Введіть пошту';
        } else if (this.email.hasError('email')) {
            this.errorMessageEmail = 'Недійсна пошта';
        } else {
            this.errorMessageEmail = '';
        }
    }

    protected updateErrorMessagePassword() {
        if (this.password.hasError('required')) {
            this.errorMessagePassword = 'Введіть пароль';
        } else {
            this.errorMessagePassword = '';
        }
    }

    authenticate(): void {
        if (this.email.hasError('required') || this.email.hasError('email') || this.password.hasError('required')) {
            return;
        }
        const isAuthenticated: Promise<boolean> = this.authenticationService.authenticate(this.email.value, this.password.value, this.rememberMe.value);
        isAuthenticated.then((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.invalidCredentials = false;
                this.router.navigate(['dashboard']).then(r => console.log(r));
            } else {
                this.email.markAsUntouched();
                this.password.markAsUntouched();
                this.invalidCredentials = true;
                this.errorMatcher.isInvalidCredentials = true;
                this.errorMessageEmail = 'Неправильна пошта або пароль';
                this.errorMessagePassword = 'Неправильна пошта або пароль';
            }
        });
    }
}

export class ErrorMatcher implements ErrorStateMatcher {
    private _isInvalidCredentials: boolean = false;

    constructor(isInvalidCredentials: boolean) {
        this._isInvalidCredentials = isInvalidCredentials;
    }
    isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
        if (control?.invalid && control?.touched) {
            return true;
        }
        return this._isInvalidCredentials && !control?.touched;
    }


    set isInvalidCredentials(value: boolean) {
        this._isInvalidCredentials = value;
    }
}

