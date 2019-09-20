import { Data , DataTarefa } from './shared';

export class Calendario{

	private hoje : Data;
	private ponteiro : Data;

	constructor(){
		
		const now = new Date();

		this.hoje = new Data(now.getDate() , now.getMonth() + 1 , now.getFullYear());
		this.ponteiro = new Data(now.getDate() , now.getMonth() + 1, now.getFullYear());

	}
	
	setPonteiroMes(mes : number): void{
		this.ponteiro.setMes(mes);
	}

	getPonteiroData(): Data{
		return this.ponteiro;
	}

	getAtualData() : Data{
		return this.hoje;
	}

}