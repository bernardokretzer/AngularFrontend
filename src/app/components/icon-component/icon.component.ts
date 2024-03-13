import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-component',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  /** Nome do botão,  */
  @Input() name!: string;

  @Output() onIconClick = new EventEmitter();


  /** Evento para emitir o click do botão */
  onButtonClickEvent() {
    this.onIconClick.emit();
  }
}
