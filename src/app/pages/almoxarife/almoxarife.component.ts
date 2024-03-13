import { Component, OnInit } from '@angular/core';
import { SolicitacaoFormComponent } from '../../components';
import { AppService } from '../../services/';
import { SolicitacaoDto } from '../shared/models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-almoxarife',
  standalone: true,
  imports: [SolicitacaoFormComponent, CommonModule, RouterLink],
  templateUrl: './almoxarife.component.html',
})
export class AlmoxarifeComponent implements OnInit {
  fromValue: SolicitacaoDto | undefined;
  id!: number;
  usuario: string = 'almoxerife'
  canUse: boolean = true;

  constructor(private server: AppService) {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const { cargo } = JSON.parse(storedData);
      this.canUse = this.usuario === cargo;
    }
  }

  ngOnInit(): void {
    this.setSubscription();
  }

  async onFormSubmit(solicitacao: SolicitacaoDto) {
   this.server.put(solicitacao, this.id).subscribe(s => {
    this.setSubscription();
   });
  }

  private setFormValue(solicitacao: SolicitacaoDto) {
    const { id, nome_solicitante, desc_item, preco_produto, solicitacao_status } = solicitacao;
    this.fromValue = new SolicitacaoDto({
      nome_solicitante,
      desc_item,
      preco_produto,
      solicitacao_status
    })
    if(id) this.id = id;
  }

  private setSubscription() {
    const sub = this.server.getAllByStatus('Em análise').subscribe(solicitacoes => {

      if (solicitacoes.length) {
        this.setFormValue(solicitacoes[0]);
      } else this.fromValue = undefined;
      sub.unsubscribe();
    });
  }
}
