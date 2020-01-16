import { Component, OnInit, ViewChild, ChangeDetectorRef, SimpleChanges, Output, Input } from '@angular/core';
import { HorarioService } from '../horario.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Horario } from '../horario';
import { MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  public currentDate = new Date();
  public horario: Horario;
  public dataSource;
  public selection;
  public now: Date = new Date();
  public currentTime;
  public dataToChange;
  public timeToChange =  this.now.getHours() + ":" + (this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes()) + ":" + this.now.getSeconds();
  @Input() horario_chegada: string;
  ELEMENT_DATA: Horario[] = [this.horario];
  displayedColumns: string[] = ['dia', 'horario_chegada', 'saida_intervalo', 'chegada_intervalo', 'horario_saida', 'justificativa', 'editar'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Output('ngModelChange') update = new EventEmitter();


  constructor(private formBuilder: FormBuilder, private _horarioService: HorarioService) { }

  addForm: FormGroup;

  ngOnInit() {
    this._horarioService.getHours(null).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Horario>(data);
        this.dataSource.paginator = this.paginator;
        this.selection = new SelectionModel<Horario>(true, []);
      }
    )
    this.currentTime = this.RetornaDataHoraAtual().toString();
    console.log(this.currentTime);


  }

  rowData(selectedItem: any) {
    console.log(selectedItem);
    this.horario = selectedItem;
    this._horarioService.editHours(this.horario)
      .subscribe(data => {
        console.log(data);
    });
  }

   updateHour(event: any) {
    event.target.value =  this.timeToChange;
  
  }

  onBlurMethod(event: any) {
    event.target.value = this.timeToChange
  }

  onSubmit(f: NgForm) {
    console.log(f.value.mes);
    this._horarioService.getHours(f.value.mes).subscribe(
      data => {
        this.horario = data;
        this.dataSource = new MatTableDataSource<Horario>(data);
        this.dataSource.paginator = this.paginator;
        this.selection = new SelectionModel<Horario>(true, []);
      },
      error => {
        console.log(error)
      }
    )
  }

  RetornaDataHoraAtual(){
    var dNow = new Date();
    var localdate = (dNow.getMonth()+1 < 10) ? dNow.getDate() + '-' + '0' +(dNow.getMonth()+1) + '-' + dNow.getFullYear() : dNow.getDate() + '-' + (dNow.getMonth()+1) + '-' + dNow.getFullYear();
    return localdate;
  }

}




