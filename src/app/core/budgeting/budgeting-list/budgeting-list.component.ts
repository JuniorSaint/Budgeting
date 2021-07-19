import { BudgetingService } from './../budgeting-shared/budgeting.service';
import { Injector } from '@angular/core';
import { ListaPadrao } from 'src/app/shared/lista-padrao';
import { Component, OnInit } from '@angular/core';
import { IBudgeting } from '../budgeting-shared/budgeting-interface';

@Component({
  selector: 'app-budgeting-list',
  templateUrl: './budgeting-list.component.html',
  styleUrls: ['./budgeting-list.component.scss']
})
export class BudgetingListComponent extends ListaPadrao<IBudgeting> implements OnInit {

  constructor(
    protected injector: Injector,
    protected service: BudgetingService
  ) { super(injector, service) }

  ngOnInit(): void {
  }



}
