import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioListaComponent } from './calendario';
import { CalendarioDirective } from './calendario';
import { CadastrarTarefaComponent } from './calendario';
import { EditarCalendarioComponent } from './calendario';
import { DashboardComponent} from './calendario';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    CalendarioListaComponent,
    CalendarioDirective,
    CadastrarTarefaComponent,
    EditarCalendarioComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
