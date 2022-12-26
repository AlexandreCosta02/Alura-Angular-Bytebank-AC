import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector:'appnovatransferencia',
    templateUrl:'./novatransferencia.component.html',
    styleUrls:['./novatransferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log("Solicitada nova transferencia");
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionarTransf(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
