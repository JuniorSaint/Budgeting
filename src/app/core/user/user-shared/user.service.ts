import { IUser } from './user-interface';
import { Injectable, Injector } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';
@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudServico<IUser>{
  
  constructor(
    protected injector: Injector
  ) {
    super('http://localhost:5000/user', injector);
   }

}
