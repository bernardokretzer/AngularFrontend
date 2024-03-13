import { Component } from '@angular/core';
import { SolicitacaoFormComponent } from '../../components';
import { AppService } from '../../services';
import { SolicitacaoDto } from '../shared/models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitante',
  standalone: true,
  imports: [SolicitacaoFormComponent, CommonModule, RouterLink],
  templateUrl: './solicitante.component.html',
})
export class SolicitanteComponent {
  usuario: string = 'solicitante'
  canUse: boolean = true;

  constructor(private server: AppService) {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const { cargo } = JSON.parse(storedData);
      this.canUse = this.usuario === cargo;
    }
  }

  onFormSubmit(solicitacao: SolicitacaoDto) {
    this.server.post(solicitacao).subscribe();
  }
}
