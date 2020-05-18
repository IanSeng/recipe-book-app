import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { AlertComponent } from './../shared/alert/alert.component';
import { AuthService } from './auth.service';
import { AuthAccount, AuthResponseData } from './account.modal';
import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

    private modelClosesubscription: Subscription;

    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

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
                this.router.navigate(['/recipes']);
            },
            error => {
                console.log(error);
                this.error = error;
                this.showErrorAlert(error);
                this.isLoading = false;
            }
        );

        form.reset();

    }
    onHandleError() {
        this.error = null;
    }
    // Progammatic way of creating model but not very suggested if we can just use ng if to solve this problem
    private showErrorAlert(message: string) {
        // component factory resolver is used to call a component 
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

        componentRef.instance.message = message;
        this.modelClosesubscription = componentRef.instance.closeModal.subscribe(() => {
            this.modelClosesubscription.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy() {
        if (this.modelClosesubscription) {
            this.modelClosesubscription.unsubscribe();
        }
    }
}