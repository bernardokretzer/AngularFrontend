import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar';
import { HeaderComponent } from './pages/header';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    SidebarComponent,
    HeaderComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularFrontend';
  /** @internal Sinalisa quando mostrar o sidebar. */
  sidebarOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => this.sidebarOpen = false);
  }

  onMenuClick() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
