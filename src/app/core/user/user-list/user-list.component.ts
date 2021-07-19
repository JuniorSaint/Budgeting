import { Component, Injector, OnInit} from '@angular/core';
import { ListaPadrao } from 'src/app/shared/lista-padrao';
import { IUser } from '../user-shared/user-interface';
import { UserService } from '../user-shared/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ListaPadrao<IUser> implements OnInit {

  constructor(
    protected servico: UserService,
    protected injector: Injector,
  ) { super(injector, servico,) }

  ngOnInit() {
    this.CompleteList();
  }

  editForm(_id: string) {
    this.router.navigate([`user/${_id}/edit`]);
  }

  novo() {
    this.router.navigate(['user/new']);
  }

}
