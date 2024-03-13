import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon-component';
import { ScreenService } from '../../services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterLink],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isOpened: boolean = false;

  get isMobile() {
    return this._screen.screenIsMobile();
  }

  constructor(private _screen: ScreenService) {}
}
