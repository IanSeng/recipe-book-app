import { User } from './../auth/account.modal';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    user$: Observable<User>;
    
    collapsed = true;
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
        this.user$ = authService.user;
    }

    ngOnInit(){
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}