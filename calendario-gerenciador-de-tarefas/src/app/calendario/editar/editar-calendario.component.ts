import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { CalendarioService , Tarefa , Data} from '../';
@Component({
  selector: 'app-editar-calendario',
  templateUrl: './editar-calendario.component.html',
  styleUrls: ['./editar-calendario.component.css']
})
export class EditarCalendarioComponent implements OnInit {

  @ViewChild('formTarefa' , { static : true }) formTarefa : NgForm;

  	id : number;
  	dia : number;
  	mes : number;
  	ano : number;

  	tarefa : Tarefa;
  	data : Data;
  constructor(private calendarioService : CalendarioService,
  			private router : Router,
  			private route : ActivatedRoute) {}

  ngOnInit() {

  	this.id = +this.route.snapshot.params['id'];
    this.dia = +this.route.snapshot.params['dia'];
    this.mes = +this.route.snapshot.params['mes'];
    this.ano = +this.route.snapshot.params['ano'];
    this.data = new Data(this.dia,this.mes,this.ano);
    this.tarefa = this.calendarioService.buscarPorId(this.data,this.id);
  	
  }

  atualizar(){
	if(this.formTarefa.form.valid){
  		this.calendarioService.atualizar(this.data , this.tarefa);
  		this.voltar();
  	}
  }


  voltar() : void{
  	this.router.navigate(['/calendario/listar/', this.dia , this.mes , this.ano]);
  }

}
