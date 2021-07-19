import { Injectable, Injector } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';
import { IBudgeting } from './budgeting-interface';
@Injectable({
  providedIn: 'root'
})
export class BudgetingService extends CrudServico<IBudgeting> {

constructor(
  protected injector: Injector
) { super( 'http://localhost:5000/budgeting'  , injector) }

}
