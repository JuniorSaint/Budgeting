import { NgModule } from '@angular/core';
import { ClientListComponent } from './../client-list/client-list.component';
import { ClientFormComponent } from './../client-form/client-form.component';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};
@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ]
})
export class ClientModule { }
