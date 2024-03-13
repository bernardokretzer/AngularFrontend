import { Component, Input } from '@angular/core';
import { SolicitacaoDto } from '../../pages/shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cards-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() get cardsValue(){
    return this.innerValue;
  }
  set cardsValue(val: SolicitacaoDto[]) {
    this.innerValue = val;
  }

  private innerValue!: SolicitacaoDto[];
}
