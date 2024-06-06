import {Component, Injectable} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
    Validators
} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {merge, Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ErrorMessageHandler} from "../../utility/error-message-handler";
import {AuthenticationService} from "../../service/authentication/authentication.service";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        FormsModule,
        MatError,
        MatFormField,
        MatInput,
        MatLabel,
        MatButton,
        RouterLink,
        ReactiveFormsModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
    registerForm: FormGroup = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email],
            asyncValidators: [this.emailValidator.validate.bind(this.emailValidator)],
            updateOn: 'blur'
        }),
        firstName: new FormControl('', {
            validators: [Validators.required],
            updateOn: 'blur'
        }),
        lastName: new FormControl('', {
            validators: [Validators.required],
            updateOn: 'blur'
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(8)],
            updateOn: 'blur'
        })
    });
    errorHandlers: RegisterErrorHandlers = {
        email: new ErrorMessageHandler(),
        firstName: new ErrorMessageHandler(),
        lastName: new ErrorMessageHandler(),
        password: new ErrorMessageHandler()
    };

    constructor(private emailValidator: TakenEmailValidator) {
        const emailControl = this.registerForm.get('email');
        const firstNameControl = this.registerForm.get('firstName');
        const lastNameControl = this.registerForm.get('lastName');
        const passwordControl = this.registerForm.get('password');
        if (emailControl && firstNameControl && lastNameControl && passwordControl) {
            merge(emailControl.events)
                .pipe(takeUntilDestroyed())
                .subscribe(() => this.errorHandlers.email.updateErrorMessage(emailControl, 'Введіть пошту', 'Недійсна пошта', 'Ця пошта уже зайнята'));
            merge(firstNameControl.events)
                .pipe(takeUntilDestroyed())
                .subscribe(() => this.errorHandlers.firstName.updateErrorMessage(firstNameControl, 'Введіть ім\'я'));
            merge(lastNameControl.events)
                .pipe(takeUntilDestroyed())
                .subscribe(() => this.errorHandlers.lastName.updateErrorMessage(lastNameControl, 'Введіть прізвище'));
            merge(passwordControl.events)
                .pipe(takeUntilDestroyed())
                .subscribe(() => this.errorHandlers.password.updateErrorMessage(passwordControl, 'Введіть пароль', '', 'Пароль повинен містити принаймні 8 символів'));
        } else {
            throw new Error('Form controls are not initialized');
        }
    }
}

interface RegisterErrorHandlers {
    email: ErrorMessageHandler;
    firstName: ErrorMessageHandler;
    lastName: ErrorMessageHandler;
    password: ErrorMessageHandler;
}

@Injectable({providedIn: 'root'})
export class TakenEmailValidator implements AsyncValidator {
    constructor(private service: AuthenticationService) {
    }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve) => {
            this.service.checkTakenEmail(control.value).then(r => {
                if (r) {
                    resolve({taken: true});
                } else {
                    resolve(null);
                }
            });
        });
    }

}