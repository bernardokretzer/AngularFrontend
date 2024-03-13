import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filtro-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtro-form.component.html',
})
export class FiltroFormComponent {
  @Output() onFormSubmit = new EventEmitter<Object>();

  nome_solicitante: string = '';
  desc_item: string = '';
  solicitacao_status: string = '';
  bottonDisabled: boolean = true;

  onEditorsChange() {
    this.bottonDisabled = !this.validateInputs()
  }

  onFormSubmitEvent() {
    if (this.validateInputs()) {
      this.onFormSubmit.emit({ 
        nome_solicitante: this.nome_solicitante,
        desc_item: this.desc_item,
        solicitacao_status: this.solicitacao_status,
      });
    }
  }

  private validateInputs() {
    if (this.nome_solicitante && this.desc_item && this.solicitacao_status) return true 
    return false;
  }
}
