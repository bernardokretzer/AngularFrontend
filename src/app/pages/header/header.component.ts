import { Component, EventEmitter, Output } from '@angular/core';
import { IconComponent } from '../../components/icon-component';
import { RouterService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [IconComponent]
})
export class HeaderComponent {
  /** Representa o click no botão cliente */
  @Output() onUserClick = new EventEmitter();
  /** Representa o click no botão menu */
  @Output() onMenuClick = new EventEmitter();

  constructor(private _router: RouterService) {}

  onUserClickEvent() {
    this._router.navigateToUserConfig();
    this.onUserClick.emit();
  }

  onMenuClickEvent() {
    this.onMenuClick.emit();
  }
}
