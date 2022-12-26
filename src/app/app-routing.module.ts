import { NovaTransferenciaComponent } from './novaTransferencia/novatransferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
