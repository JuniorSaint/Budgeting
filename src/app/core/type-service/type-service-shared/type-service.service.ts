import { Injector } from '@angular/core';
import { ITypeService } from './type-service-interface';
import { Injectable } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';
@Injectable({
  providedIn: 'root'
})
export class TypeServiceService extends CrudServico<ITypeService>{

  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/typeservice', injector)
  }
}

