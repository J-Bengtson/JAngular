import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

import { CalendarioService , DataTarefa , Data , Tarefa , Calendario } from '../';

@Component({
  selector: 'app-calendario-lista',
  templateUrl: './calendario-lista.component.html',
  styleUrls: ['./calendario-lista.component.css']
})
export class CalendarioListaComponent implements OnInit {

  constructor(
  	private calendarioService : CalendarioService,
  	private router : Router,
  	private route : ActivatedRoute
  	) { }


  ngOnInit() {

  	this.dia = +this.route.snapshot.params['dia'];
  	this.mes = +this.route.snapshot.params['mes'];
  	this.ano = +this.route.snapshot.params['ano'];


  }

  public dia : number;
  public mes : number;
  public ano : number;

  pegarTarefas() : Tarefa[]{
    let dataTarefa = this.calendarioService.pegarDataTarefa( new Data( this.dia , this.mes , this.ano ));
    return dataTarefa ? dataTarefa.tarefas : [];
  }


  removerTarefa($event : any , tarefa  : Tarefa) : void{
    $event.preventDefault();
    if(confirm('Deseja remover tarefa "'+tarefa.nome+'" ?')){
      this.calendarioService.removerTarefa( new Data(this.dia , this.mes , this.ano ) , tarefa);
    }
  }

  voltar() : void{
    this.router.navigate(['/calendario']);
  }

  mudarStatus(tarefa : Tarefa) : void{
    this.calendarioService.mudarStatus( new Data(this.dia , this.mes , this.ano) , tarefa );
  }

  

}
