import { Component, OnInit, Injector } from '@angular/core';
import { ClientService } from './../client-shared/client.service';
import { IClient } from './../client-shared/cliente-interface';
import { ListaPadrao } from 'src/app/shared/lista-padrao';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent extends ListaPadrao<IClient> implements OnInit {
  panelOpenState = false;
  
  constructor(
    protected injector: Injector,
    protected service: ClientService
  ) { super(injector, service) }

  ngOnInit(): void {
    this.CompleteList();    
  }

  edit(id: any): void{
    this.router.navigate([`client/${id}/edit`]);
  }

  novo(){
    this.router.navigate(['/client/new']);
  }
}
