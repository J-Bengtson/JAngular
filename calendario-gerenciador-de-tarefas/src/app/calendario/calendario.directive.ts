import { Directive , ElementRef , OnInit , Input} from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class CalendarioDirective implements OnInit{

  @Input() tarefaConcluida : boolean;
  constructor(
  	private el: ElementRef
  	) {}

  ngOnInit(){
  	if(this.tarefaConcluida){
  		this.el.nativeElement.style.textDecoration = "line-through";
  	}
  }
}
