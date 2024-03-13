import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { SolicitacaoDto } from '../../pages/shared/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'solicitacao-form-component',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective, CommonModule],
  providers: [provideNgxMask()],
  templateUrl: './solicitacao-form.component.html',
})
export class SolicitacaoFormComponent implements OnInit{
  @Input() isAlmoxerife!: boolean;
  @Input() get formValue() {
    return this.innerFormValue;
  }; 
  set formValue(val: SolicitacaoDto) {
    if (val != undefined) {
      this.innerFormValue = val;
      this.setInputValues();
    }
  }

  private innerFormValue!: SolicitacaoDto;

  @Output() onFormSubmit = new EventEmitter<SolicitacaoDto>();

  nome_solicitante: string = '';
  desc_item: string = '';
  preco_produto: string = '';
  solicitacao_status: string = 'Em análise';
  observacao: string = '';
  bottonDisabled: boolean = true;
  hasSolicitacao!: boolean;

  ngOnInit(): void {
      this.setInputValues();
  }

  onEditorsChange() {
    this.bottonDisabled = !this.validateInputs()
  }

  onFormSubmitEvent() {
    if (this.validateInputs()) {
      this.onFormSubmit.emit(new SolicitacaoDto({ 
        nome_solicitante: this.nome_solicitante,
        desc_item: this.desc_item,
        preco_produto: this.preco_produto,
        solicitacao_status: this.solicitacao_status,
        observacao: this.observacao,
      }));
    }
  }

  private setInputValues () {
    if (this.formValue) {
      const { nome_solicitante, desc_item, preco_produto, solicitacao_status } = this.formValue;
      this.nome_solicitante = nome_solicitante;
      this.desc_item = desc_item;
      this.preco_produto = preco_produto;
      this.solicitacao_status = solicitacao_status;
      this.bottonDisabled = !this.validateInputs();

    }
  }
  
  private validateInputs() {
    if (this.isAlmoxerife) {
      if (this.solicitacao_status !== 'Em análise') {
        if (this.solicitacao_status === 'Reprovado') {
          if (!this.observacao) return false;
        }      
        return true;   
      } 
    } else {
      if (this.nome_solicitante && this.desc_item && this.preco_produto.length >= 8) return true
    }    
    return false;
  }
}
