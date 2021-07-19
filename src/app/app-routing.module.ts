import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./core/client/client-shared/client.module').then(mod => mod.ClientModule) },
  { path: 'typeService', loadChildren: () => import('./core/type-service/type-service-shared/type-service.module').then(mod => mod.TypeServiceModule) },
  { path: 'user', loadChildren: () => import('./core/user/user-shared/user.module').then(mod => mod.UserModule) },
  { path: 'budgeting', loadChildren: () => import('./core/budgeting/budgeting-shared/budgeting.module').then(mod => mod.BudgetingModule) },


  { path: '', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
