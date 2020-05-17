import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book-app';
  loadedFeature = 'recipe';
  constructor(private authService: AuthService) {
    this.authService.autoLogin();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
