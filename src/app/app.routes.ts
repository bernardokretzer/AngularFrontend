import { Routes } from '@angular/router';
import { SolicitanteComponent } from './pages/solicitante';
import { UserComponent } from './pages/user';
import { HomeComponent } from './pages/home/home.component';
import { AlmoxarifeComponent } from './pages/almoxarife';
import { AdministrativoComponent } from './pages/administrativo';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'user',
		pathMatch: 'full'
	},
    {
		path: 'user',
		component: UserComponent,
	},  
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'solicitacao',
		component: SolicitanteComponent,
	},
	{
		path: 'aprovarCompras',
		component: AlmoxarifeComponent,
	},
	{
		path: 'consultaCompras',
		component: AdministrativoComponent,
	},
];

// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule],
// })
// export class AppRoutingModule {}
