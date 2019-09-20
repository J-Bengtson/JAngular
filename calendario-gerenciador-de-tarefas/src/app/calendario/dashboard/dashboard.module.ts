import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { CalendarioService } from '../';
import { DashboardComponent , DashboardService } from './';


@NgModule({
  declarations: [
  	DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
  	CalendarioService,
  	DashboardService
  ]
})
export class DashboardModule { }
