import { PrimengModule } from './../primeng.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPadraoComponent } from './header-padrao.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule
  ],
  declarations: [HeaderPadraoComponent]
})
export class HeaderPadraoModule { }
