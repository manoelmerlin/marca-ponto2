import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorariosComponent } from './horarios/horarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorarioService } from './horario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatButtonModule, MatSelectModule} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import * as moment from 'moment';
import { ExportDataComponent } from './export-data/export-data.component';
import * as XLSX from 'xlsx'; 


@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    NavBarComponent,
    ExportDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  providers: [
    HorarioService
  ],
  bootstrap: [
    AppComponent
  ],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]

})
export class AppModule { }
