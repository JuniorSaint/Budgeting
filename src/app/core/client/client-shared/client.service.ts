import { IClient } from './cliente-interface';
import { Injectable, Injector } from '@angular/core';
import { CrudServico } from 'src/app/shared/crud-servico';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends CrudServico<IClient>{
  readonly URLC = 'http://localhost:5000/client/id/name'
  constructor(
    private injector: Injector
  ) {super('http://localhost:5000/client', injector) }

  getByIdName(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.URLC)
      .pipe( 
        map( ( dados:any) => dados = dados.result),       
        catchError(this.handleError)
      );
  }
}
