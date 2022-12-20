import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/models/user.state';
import { Users } from 'src/app/models/users';
import { loadUsers, deleteUser } from '../../state/user.actions';
import { selectStateCargando, selectStateUsers } from '../../state/user.selectors';
import { EditUsersComponent } from '../edit-users/edit-users.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  users$!:Observable<Users[]>;
  cargando$!: Observable<boolean>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store <UserState>
  )
  {
    this.store.dispatch(loadUsers());
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnInit(): void {
    this.users$= this.store.select(selectStateUsers);
  }
  eliminar(id: number){
    if(confirm("Esta seguro de eliminar el elemento nombre: "+id)) {
      this.store.dispatch(deleteUser({id}));
    }
  }
  editar(usuario: Users){
    this.dialog.open(EditUsersComponent,
      {
        width: '550px',
        data: usuario
      }
    )
  }
}