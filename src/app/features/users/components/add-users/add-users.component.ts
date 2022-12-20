import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/models/user.state';
import { Users } from 'src/app/models/users';
import { selectStateUsers } from '../../state/user.selectors';
import { addUser } from '../../state/user.actions';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnDestroy, AfterViewInit {
  formulario!: FormGroup;
  suscripcion: any;
  idMax: number = 1;
  usuarios!: Users[];
  usuarios$!: Observable<Users[]>;

  constructor(
    public dialogRef: MatDialogRef<AddUsersComponent>,
    private store: Store<UserState>,
  )
  {
    this.formulario= new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(2)]),
      admin: new FormControl('',)
      })

  }

  ngOnInit(): void {
    this.usuarios$ = this.store.select(selectStateUsers);
  }

  ngAfterViewInit(): void{

    this.suscripcion = this.usuarios$.subscribe({
      next: (usuarios: Users[]) => {
        this.usuarios = usuarios;
        this.idMax = Math.max.apply(null, this.usuarios.map(o => o.id));
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }
  save(){
    const usuario : Users = {
      id: this.idMax+1,
      nombre: this.formulario.value.nombre,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
    this.store.dispatch(addUser({user: usuario}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }
}
