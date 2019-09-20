import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioListaComponent } from './calendario-lista.component';

describe('CalendarioListaComponent', () => {
  let component: CalendarioListaComponent;
  let fixture: ComponentFixture<CalendarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
