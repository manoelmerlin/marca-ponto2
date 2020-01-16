import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorariosComponent } from './horarios/horarios.component';
import { ExportDataComponent } from './export-data/export-data.component';


const routes: Routes = [
  {path: '', component: HorariosComponent},
  {path: 'export', component: ExportDataComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
