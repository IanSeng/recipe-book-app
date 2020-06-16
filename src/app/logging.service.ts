import { Injectable } from '@angular/core';

// This service is meant for showing lazy loading 
@Injectable({providedIn: 'root'})
export class LoggingService {
    lastlog: string;

    printLog(message: string) {
        console.log(message);
        console.log(this.lastlog);
        this.lastlog = message;
    } 
}