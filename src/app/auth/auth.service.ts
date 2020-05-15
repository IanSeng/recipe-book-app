import { AuthResponseData, AuthAccount, authAccount } from './account.modal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; // it will throw error in observable

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signup(signupAccount: AuthAccount) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDn5e79rVKNvR2iz7QanEIejhTw-XM4vmI',
            {
                email: signupAccount.email,
                password: signupAccount.password,
                returnSecureToken: true,
            }
        ).pipe(catchError(this.handleError));

    }

    login(loginAccount: AuthAccount) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDn5e79rVKNvR2iz7QanEIejhTw-XM4vmI',
            {
                email: loginAccount.email,
                password: loginAccount.password,
                returnSecureToken: true,
            }
        ).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        } // if the we are getting an error does not contain an error message we will just throw default error observable
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists in the database';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct';
                break;
        }
        return throwError(errorMessage);
    }
}
