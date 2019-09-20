import { Tarefa } from './';

export class Data{


	dia : number;
	mes : number;
	ano : number;

	constructor(

		dia? : number,
		mes? : number,
		ano? : number

	){


		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}
	
	getDia() : number{
		return this.dia;
	}

	getMes() : number{

		return this.mes;
	}


	nextMes(){

		this.mes += 1;

		if(this.mes > 12){
			this.setAno( this.getAno() + 1 );
			this.mes = 1;
		}else if( this.mes < 1){
			this.setAno( this.getAno() - 1);
			this.mes = 12;
		}



	}

	prevMes(){
		this.mes -= 1;
		if(this.mes > 12){
			this.setAno( this.getAno() + 1 );
			this.mes = 1;
		}else if( this.mes < 1){
			this.setAno( this.getAno() - 1);
			this.mes = 12;
		}


	}

	getAno() : number{
		return this.ano;
	}

	getDiasDoMes() : number {
		switch(this.getMes()){
			case 1: return 31;
			break;
			case 2: return (this.getAno() % 4 === 0) ? 29 : 28;
			break;
			case 3: return 31;
			break;
			case 4: return 30;
			break;
			case 5: return 31;
			break;
			case 6: return 30;
			break;
			case 7: return 31;
			break;
			case 8: return 31;
			break;
			case 9: return 30;
			break;
			case 10: return 31;
			break;
			case 11: return 30;
			break;
			case 12: return 31;
			break;
		}
	}

	setDia( dia : number ): void{
		this.dia = dia;
	}

	setMes( mes : number ) : void{
		this.mes = mes;
	}

	setAno( ano : number ):void{
		this.ano = ano;
	}
}