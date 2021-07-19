import { NgModule } from '@angular/core';
import { ClientFormComponent } from './../client-form/client-form.component';
import { ClientListComponent } from './../client-list/client-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ClientListComponent, data: { Title: 'Lista de Clientes' }  },
    { path: 'new', component: ClientFormComponent, data: { Title: 'Cadastrando Cliente'} },
    { path: ':id/edit', component: ClientFormComponent, data: { Title: 'Editando Cliente'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
