import { AuthService } from './auth.service';
import { AuthAccount, AuthResponseData } from './account.modal';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {

        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObservable: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObservable = this.authService.login(new AuthAccount(email, password));
        } else {
            authObservable = this.authService.signup(new AuthAccount(email, password));
        }

        authObservable.subscribe(
            response => {
                console.log(response);
                this.isLoading = false;
            },
            error => {
                console.log(error);
                this.error = error;
                this.isLoading = false;
            }
        );

        form.reset();

    }
}