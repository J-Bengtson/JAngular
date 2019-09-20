import { Component, OnInit , ViewChild } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CalendarioService , Tarefa , DataTarefa , Data} from '../';
@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {


  @ViewChild('formTarefa' , {static : true }) formTarefa : NgForm;

  constructor(

  	private calendarioService : CalendarioService ,
  	private router : Router ,
  	private route : ActivatedRoute

  	) {}


   dia : number;
   mes : number ;
   ano : number;

   nomeTarefa : string;

  ngOnInit() {

    this.dia = +this.route.snapshot.params['dia'];
    this.mes = +this.route.snapshot.params['mes'];
    this.ano = +this.route.snapshot.params['ano'];

    this.nomeTarefa = "";
  	
  }

  voltar() : void{
    this.router.navigate(['/calendario/listar/' , this.dia , this.mes , this.ano]);
  }


  cadastrarTarefa() : void{


    const date : Date = new Date();
    if(this.formTarefa.form.valid){

      this.calendarioService.cadastrarTarefa(new Data(this.dia , this.mes , this.ano) 
      , new Tarefa( date.getTime() , this.nomeTarefa , false));

      this.router.navigate(['/calendario/listar' , this.dia , this.mes , this.ano ]);

    }

  }


}
