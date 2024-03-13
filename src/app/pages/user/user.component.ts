import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDto } from '../shared/models';
import { RouterService } from '../../services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class UserComponent implements OnInit {
  @Output() onUserSent = new EventEmitter<UserDto>();

  nome: string = '';
  senha: string = '';
  cargo: string = '';
  bottonDisabled: boolean = true;

  constructor(private _router: RouterService) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.nome = parsedData.nome;
      this.senha = parsedData.senha;
      this.cargo = parsedData.cargo;
      this.bottonDisabled = !this.validateInputs();
    }
  }

  onFormSubmit() {
    if (this.validateInputs()) {
      const formData = { nome: this.nome, senha: this.senha, cargo: this.cargo };
      localStorage.setItem('userData', JSON.stringify(formData));
      this._router.setLoggedUser(formData);
      this._router.navigateByCargo();
      this.onUserSent.emit(formData);
    }
  }

  onEditorsChange() {
    this.bottonDisabled = !this.validateInputs();
  }

  private validateInputs() {
    if (this.nome && this.senha && this.cargo) return true
       
    return false;
  }
}
