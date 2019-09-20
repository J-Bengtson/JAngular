import { Component, OnInit } from '@angular/core';

import { CalendarioService } from '../';
import { DataTarefa , Tarefa , Data } from '../shared';
import { DashboardService } from './';
declare var google : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService : DashboardService,
              private calendarioService : CalendarioService) { }

  dados : any;

  ngOnInit() {

  	this.dashboardService.obterDados().subscribe( o =>{
  		this.dados = o;
  		this.init();
  	});

  }

  async init(){
  	if(typeof(google) !== 'undefined'){
  		google.charts.load('current',{'packages':['corechart']});
  		setTimeout(()=>{
  			google.charts.setOnLoadCallback(this.exibirGrafico());
  		}, 1000 );
  	}
  }

  exibirGrafico():void{

  	this.exibir3dPieChart();
  }

  exibir3dPieChart():void{
  	const el = document.getElementById('chart');
  	const chart = new google.visualization.PieChart(el);
    const opcao = this.getOpcoes();
    opcao['is3D'] = true;

  	chart.draw( this.getTable() , opcao );
  }

  getTable() : any{
	const data = new google.visualization.DataTable();
	data.addColumn('string', 'Nome');
  	data.addColumn('number', 'Quantidade');
	
  	const dados_ = <DataTarefa[]>this.dados;

  	let qntInconc = 0;
  	let qntConc = 0;
  	dados_.forEach((obj,index,objs)=>{
  		if( this.calendarioService.numTarefasSemConcluir(obj.dia , obj.mes , obj.ano) > 0){
  			qntInconc++;
  		}else if(this.calendarioService.isTodasTarefasConcluidas(obj.dia,obj.mes,obj.ano)){
  			qntConc++;
  		}

  	});


  	const inconcluidos = ["inconcluido" ,  qntInconc];
  	const concluidos = [ "concluido" ,  qntConc ];

  	const c = [ inconcluidos , concluidos ];

  	data.addRows(c);

  	return data;
  }

  getOpcoes() : any{
	return {
	  		'title': 'Razão(%)',
	  		'width': 500,
	  		'height': 400
	  };
  }


}

interface Dado{
	nome: string,
	quantidade:number
}
