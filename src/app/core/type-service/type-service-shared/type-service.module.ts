import { NgModule } from '@angular/core';
import { TypeServiceListComponent } from './../type-service-list/type-service-list.component';
import { TypeServiceFormComponent } from './../type-service-form/type-service-form.component';
import { CommonModule } from '@angular/common';
import { TypeServiceRoutingModule } from './type-service-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/primeng.module';
@NgModule({
  declarations: [
    TypeServiceFormComponent,
    TypeServiceListComponent
  ],
  imports: [
    CommonModule,
    TypeServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class TypeServiceModule { }
