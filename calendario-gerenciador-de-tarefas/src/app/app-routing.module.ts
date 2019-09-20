import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioComponent } from './calendario';
import { CalendarioListaComponent , CadastrarTarefaComponent , EditarCalendarioComponent , DashboardComponent} from './calendario';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'calendario',
		pathMatch: 'full'
	},
	
	{
		path: 'calendario',
		component: CalendarioComponent
	},

	{
		path: 'calendario/listar/:dia/:mes/:ano',
		component: CalendarioListaComponent
	},
	{
		path: 'calendario/cadastrar/:dia/:mes/:ano',
		component: CadastrarTarefaComponent
	},
	{
		path: 'calendario/editar/:dia/:mes/:ano/:id',
		component: EditarCalendarioComponent
	},
	{

		path: 'calendario/dashboard',
		component: DashboardComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
