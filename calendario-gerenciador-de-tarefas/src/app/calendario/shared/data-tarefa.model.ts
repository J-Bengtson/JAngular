
import { Data , Tarefa } from './';
export class DataTarefa extends Data{
	

	tarefas : Array<Tarefa>;

	constructor(

		dia : number,
		mes : number,
		ano : number,
		tarefas? : Array<Tarefa>

	){
		super(dia , mes , ano );
		this.tarefas = tarefas;	
	}


	getTarefas() : Array<Tarefa>{
		return this.tarefas;
	}

	addTarefa(tarefa : Tarefa): void{
		this.tarefas.push(tarefa);
	}


}