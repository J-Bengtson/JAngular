import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CalendarioService ,
   CalendarioComponent , 
   CalendarioDirective ,
  CadastrarTarefaComponent ,
 EditarCalendarioComponent } from './';

@NgModule({
  declarations: [
  	CalendarioComponent,
  	CalendarioDirective,
  	CadastrarTarefaComponent,
  	EditarCalendarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
  	CalendarioService
  ]
})
export class CalendarioModule { }
