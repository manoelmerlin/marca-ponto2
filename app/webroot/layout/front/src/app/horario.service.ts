import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from './horario';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  getHours(mes: null) {
    let retorno
    if (mes == null) {
      retorno = this.http.get<Horario[]>("http://localhost/marca-ponto2/hours");
    } else {
      retorno = this.http.get<Horario[]>("http://localhost/marca-ponto2/hours/index"+mes);
    }
    return retorno;
  }

  editHours(horario) {
    return this.http.post<Horario[]>("http://localhost/marca-ponto2/hours/edit.json", horario);
  }
}
