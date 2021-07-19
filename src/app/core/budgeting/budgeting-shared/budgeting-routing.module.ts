import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetingFormComponent } from '../budgeting-form/budgeting-form.component';
import { BudgetingListComponent } from '../budgeting-list/budgeting-list.component';


const routes: Routes = [
  { path: '', component: BudgetingListComponent},
  { path: 'new', component: BudgetingFormComponent },
  { path: ':id/edit', component: BudgetingFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetingRoutingModule { }
