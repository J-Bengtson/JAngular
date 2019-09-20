import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CalendarioService } from '../calendario.service';
import { Data , DataTarefa , Tarefa } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  hoje : Data;

  constructor(private calendarioService : CalendarioService) {
    this.hoje = this.calendarioService.getCalendario().getAtualData();
  }




   obterDados() : Observable<any>{
   	return new Observable( e => {
   		e.next(this.listarDataTarefaAnteriores());
   		e.complete();
   	});
   }


  listaTodos() : DataTarefa[]{
    const dataTarefas = localStorage[CalendarioService.DATA_BASE];
    return dataTarefas ? JSON.parse(dataTarefas) : [];
  }


  listarDataTarefaAnteriores() : DataTarefa[]{

    const dataTarefa : DataTarefa[] = this.listaTodos();
    const tmpTarefa : DataTarefa[] = new Array();
    const hoje : Data = this.hoje;
    dataTarefa.forEach( (obj , index , objs) =>{

      if( (obj.ano < hoje.ano ) || (obj.ano === hoje.ano && obj.mes < hoje.mes) ||  (obj.ano === hoje.ano && obj.mes === hoje.mes && obj.dia < hoje.dia)){
        tmpTarefa.push(obj);
      }

    });

    return (tmpTarefa) ? tmpTarefa : [];

  }



  

}
