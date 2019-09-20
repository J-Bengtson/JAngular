import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Calendario , CalendarioService , Data , DataTarefa , Tarefa } from './';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


  private mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];


  calendario : Calendario;

  constructor(

  	private calendarioService : CalendarioService,
    private router : Router,
    private route : ActivatedRoute

  	) { }

  ngOnInit() {
  	this.calendario = this.calendarioService.getCalendario();
  }

  nextMes(){

    this.getPonteiro().nextMes();
    
  }
  prevMes(){
    this.getPonteiro().prevMes();

  }


  cadastrarTarefa(data : Data , tarefa : Tarefa ) : void{
    this.calendarioService.cadastrarTarefa(data , tarefa);
  }
  
  getArrayDataTarefa() : Array<DataTarefa>{
    return this.calendarioService.listaTodos();
  }

  getPonteiro() : Data{
    return this.calendario.getPonteiroData();
  }

  getHoje(): Data{
    return this.calendario.getAtualData();
  }

  numTarefasSemConcluir(dia : number , mes : number , ano : number) : number {
    return this.calendarioService.numTarefasSemConcluir(dia,mes,ano);
  }

  isTodasTarefasConcluidas(dia : number , mes : number, ano : number ) : boolean{
    return this.calendarioService.isTodasTarefasConcluidas(dia,mes,ano);
  }

  verificaHoje( pos : number){
   return (pos === this.getPonteiro().getDia() && 
        this.getHoje().getMes() === this.getPonteiro().getMes() && this.getHoje().getAno() === this.getPonteiro().getAno())
  }

  verificaNumTarefas(pos : number){
    return this.numTarefasSemConcluir( pos , this.getPonteiro().getMes() ,this.getPonteiro().getAno()) > 0;
  }


  calcularDiaDaSemana() : number{
    let date = 1;
    let month = this.getPonteiro().getMes() - 1;
    let year = this.getPonteiro().getAno();

        if (month < 3) {
            month += 12;
            year -= 1;
        }

 
     let k = year % 100;
     let j = year / 100;
     let day = Math.floor( ((date + (((month + 1) * 26) / 10) + k + (k / 4) + (j / 4)) + (5 * j)) % 7);

    console.log(date+"/"+month+"/"+year+".."+day);

    switch(day){
      case 0: return 0 + 1;//sabado
      break;
      case 1: return 1 + 1;//dom
      break;
      case 2: return 2 + 1;// seg
      break;
      case 3: return 3 + 1; //ter
      break;
      case 4: return 4 + 1;// quar
      break;
      case 5: return 5 + 1;// qui
      break;
      case 6: return 6 + 1;// sex
      break;
    }
  }

}