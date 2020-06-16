import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'recipe-book-app';
  loadedFeature = 'recipe';
  constructor(private authService: AuthService, private loggingService: LoggingService) {
    this.authService.autoLogin();
  }

  ngOnInit() {
    this.loggingService.printLog("Hello from AppComponent ngOnInit")
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
