import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Cliente', icon: 'pi pi-fw pi-plus', routerLink: ['client'] },
      { label: 'Tipo Serviço', icon: 'pi pi-fw pi-download', routerLink: ['typeService/new'] },
      { label: 'Orçamento', icon: 'pi pi-fw pi-refresh', routerLink: ['budgeting/new'] },
      { label: 'Usuário', icon: 'pi pi-fw pi-refresh', routerLink: ['user'] }
    ];
  }
}
