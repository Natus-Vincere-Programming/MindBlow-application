import {AbstractControl} from "@angular/forms";

export class ErrorMessageHandler {
    private errorMessage: ErrorMessage = {message: ''};

    updateErrorMessage(control: AbstractControl<any, any>, requiredErrorMessage?: string, emailErrorMessage?: string, otherErrorMessage?: string): void {
        console.log(control.errors);
        if (control.hasError('required')) {
            this.errorMessage.message = requiredErrorMessage ? requiredErrorMessage : 'Введіть дані';
            return;
        } else if (control.hasError('email')) {
            this.errorMessage.message = emailErrorMessage ? emailErrorMessage : 'Недійсна пошта';
            return;
        } else if (control.invalid) {
            this.errorMessage.message = otherErrorMessage ? otherErrorMessage : 'Недійсні дані';
            return;
        } else {
            this.errorMessage.message = '';
        }
    }

    getErrorMessage(): string {
        return this.errorMessage.message;
    }
}

export interface ErrorMessage {
    message: string;
}