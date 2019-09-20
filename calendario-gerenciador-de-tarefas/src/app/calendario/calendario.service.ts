 import { Injectable  } from '@angular/core';


import { Calendario , DataTarefa , Tarefa , Data} from './';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  static DATA_BASE : string = 'dataTarefas';
  private calendario : Calendario = new Calendario();

  constructor() {}



  getCalendario() : Calendario{
  	return this.calendario;
  }


  mostraDataTarefa() : void{
  	const p : Array<DataTarefa> = this.listaTodos();

  	for(var x = 0 ; x < p.length ; x++){
  		console.log(p[x].dia +" "+p[x].mes + " " + p[x].ano);
  	}
  }

  listaTodos() : DataTarefa[]{
  	const dataTarefas = localStorage[CalendarioService.DATA_BASE];
  	return dataTarefas ? JSON.parse(dataTarefas) : [];
  }

  cadastrarTarefa(data : Data , tarefa : Tarefa ) : void{

  	let dataTarefas : Array<DataTarefa> = this.listaTodos();
  	let haRegistro = false;
  	tarefa.id = new Date().getTime();
    dataTarefas.forEach( (obj , index , objs) => {

      if(this.isDatasIguais(obj , data)){

        objs[index].tarefas.push(tarefa);
        haRegistro = true;

      }

    });

  	if(!haRegistro){

  		dataTarefas.push(new DataTarefa(data.dia , data.mes , data.ano , [tarefa]));
  	}

  	localStorage[CalendarioService.DATA_BASE] = JSON.stringify(dataTarefas);
  }

  removerTarefa( data : Data , tarefa : Tarefa ){
  	let dataTarefas = this.listaTodos();

    dataTarefas.forEach( (obj , index , objs ) => {
      if(this.isDatasIguais(obj , data)){
        
        objs[index].tarefas.forEach( ( t , index_ , ts) =>{

          if(tarefa.id === t.id){
             objs[index].tarefas.splice( index_ , 1);

             if(objs[index].tarefas.length === 0){
               objs.splice( index , 1);
             }

          }

        });
      }

    });

  	localStorage[CalendarioService.DATA_BASE] = JSON.stringify(dataTarefas);
  }

  pegarDataTarefa(data : Data): DataTarefa{
    let dataTarefas = this.listaTodos();
    return dataTarefas.find(dataTerefa => dataTerefa.dia === data.dia &&
      dataTerefa.mes === data.mes && dataTerefa.ano === data.ano
    );
  }

  isDatasIguais(data1 : Data , data2 : Data) : boolean {
  	return data1.dia === data2.dia &&
  		   data1.mes === data2.mes &&
  		   data1.ano === data2.ano;
  }


  mudarStatus(data : Data , tarefa : Tarefa){
    let dataTarefas = this.listaTodos();
    dataTarefas.forEach( (obj , index , objs )=>{
      if(this.isDatasIguais(obj , data)){
         obj.tarefas.forEach(( ob , index , obs)=>{
           if(ob.id == tarefa.id){
             obs[index].concluida = !ob.concluida;
           }
         });
      }
    });
    localStorage[CalendarioService.DATA_BASE] = JSON.stringify(dataTarefas);
  }

   atualizar(data : Data , tarefa : Tarefa) : void{

    const dataTarefas: DataTarefa[] = this.listaTodos();
    dataTarefas.forEach((obj,index,objs)=>{
        if(this.isDatasIguais(data , obj)){
          objs[index].tarefas.forEach((t , index_ , ts)=>{
            if(tarefa.id === t.id){
              ts[index_] = tarefa;
            }
          });
        }
    });
    localStorage[CalendarioService.DATA_BASE] = JSON.stringify(dataTarefas);

  }


  buscarPorId(data : Data , id : number): Tarefa{

    const dataTarefa : DataTarefa = this.pegarDataTarefa(data);
    return dataTarefa.tarefas.find( tarefa => tarefa.id === id);
  }

  listarDataTarefaAnteriores() : DataTarefa[]{

    const dataTarefa : DataTarefa[] = this.listaTodos();
    const tmpTarefa : DataTarefa[] = new Array();
    const hoje : Data = this.getCalendario().getAtualData();
    dataTarefa.forEach( (obj , index , objs) =>{

      if( (obj.ano < hoje.ano ) || (obj.ano === hoje.ano && obj.mes < hoje.mes) ||  (obj.ano === hoje.ano && obj.mes === hoje.mes && obj.dia < hoje.dia)){
        tmpTarefa.push(obj);
      }

    });

    return (tmpTarefa) ? tmpTarefa : [];

  }


    numTarefasSemConcluir(dia : number , mes : number , ano : number) : number {

      var dataTarefas : Array<DataTarefa> = this.listaTodos();

      var numTarefas = 0;
      const data = new Data(dia , mes , ano);
      const tarefasNaoConcluidas = 0;

      dataTarefas.forEach( (obj,index,objs) => {
        if(this.isDatasIguais(obj , data)){
          objs[index].tarefas.forEach((t , index_ , ts)=>{
              if(!t.concluida){
                numTarefas++;
              }
          })
        }
      });
      
      return numTarefas;
  }

  isTodasTarefasConcluidas(dia : number , mes : number, ano : number ) : boolean{
     var dataTarefas : Array<DataTarefa> = this.listaTodos();

    var numTarefas = 0;
    var lenTarefas = 0;
    const data = new Data(dia , mes , ano);
    const tarefasNaoConcluidas = 0;

    dataTarefas.forEach( (obj,index,objs) => {
      if(this.isDatasIguais(obj , data)){
        lenTarefas = obj.tarefas.length;
        objs[index].tarefas.forEach((t , index_ , ts)=>{
            if(t.concluida){
              numTarefas++;
            }
        })
      }
    });
    if(lenTarefas === 0) return false;
    return numTarefas === lenTarefas;
  }


  


}
