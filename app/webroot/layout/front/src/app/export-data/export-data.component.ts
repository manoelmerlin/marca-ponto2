import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { HorarioService } from '../horario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit {

  public horario;
  @ViewChild('TABLE', { static: true }) TABLE: ElementRef;  


  constructor(private _horarioService: HorarioService) { }

  ngOnInit() {
    this._horarioService.dataToExport('01').subscribe(
      data => {
        this.horario = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  ExportTOExcel() {  
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'teste.xlsx');  
  }  
  
}

