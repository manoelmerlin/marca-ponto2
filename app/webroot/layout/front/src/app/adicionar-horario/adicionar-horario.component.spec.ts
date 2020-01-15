import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarHorarioComponent } from './adicionar-horario.component';

describe('AdicionarHorarioComponent', () => {
  let component: AdicionarHorarioComponent;
  let fixture: ComponentFixture<AdicionarHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
