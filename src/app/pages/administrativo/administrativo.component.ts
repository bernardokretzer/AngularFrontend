import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from '../../components';
import { SolicitacaoDto } from '../shared/models';
import { AppService } from '../../services';
import { FiltroFormComponent } from '../../components/filtro-form';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-administrativo',
  standalone: true,
  imports: [CommonModule, CardsComponent, FiltroFormComponent, RouterLink],
  templateUrl: './administrativo.component.html',
})
export class AdministrativoComponent {
  cardsValue!: SolicitacaoDto[];
  isFiltro: boolean = true;
  usuario: string = 'administrativo'
  canUse: boolean = true;

  constructor(private _server: AppService) {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const { cargo } = JSON.parse(storedData);
      this.canUse = this.usuario === cargo;
    }
  }

  buttonClick() {
    this.isFiltro = true;
  }

  onFiltroSubmit(event: Object) {
    const sub = this._server.getFiltro(event).subscribe(solicitacoes => {
      this.cardsValue = solicitacoes;
      this.isFiltro = false;
      sub.unsubscribe;
    })
  }
}
