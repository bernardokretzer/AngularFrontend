import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../../pages/shared/models';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _loggedUser!: UserDto;

  constructor(private _router: Router) { 
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this._loggedUser = parsedData;
    }
  }

  /** Navega para home. */
  navigateToHome() {
    this._router.navigate(['/home']);
  }

   /** Navega para solicitacao. */
  navigateToSolicitacao() {
    this._router.navigate(['/solicitacao']);
  }

   /** Navega para aprovarCompras. */
  navigateToAprovarCompras() {
    this._router.navigate(['/aprovarCompras']);
  }

   /** Navega para consultaCompras. */
  navigateToConsultaCompras() {
    this._router.navigate(['/consultaCompras']);
  }

  /** Navega para user. */
  navigateToUserConfig() {
    this._router.navigate(['/user']);
  }

  setLoggedUser(user: UserDto) {
    this._loggedUser = user;
  }

  /** Navega pare tela conforme cargo do usuário. */
  navigateByCargo() {
    switch (this._loggedUser?.cargo) {
      case 'solicitante':
        this.navigateToSolicitacao();
        break;
      case 'almoxerife':
        this.navigateToAprovarCompras();
        break;
      case 'administrativo':
        this.navigateToConsultaCompras();
        break;
      default:
        break;
    }
  }
}
