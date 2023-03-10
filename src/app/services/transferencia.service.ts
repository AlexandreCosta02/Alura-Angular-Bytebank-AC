import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listatransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];
}

get transferencias(){
  return this.listatransferencia;
}

todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionarTransf(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);

  return this.httpClient.post<Transferencia>(this.url, transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
