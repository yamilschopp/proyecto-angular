import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UserState } from '../../../../models/user.state';
import { editUser } from '../../state/user.actions';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {

  
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Users,
    private store: Store<UserState>,
  )
  {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.usuario.nombre, [Validators.required]),
      contrasena: new FormControl(this.usuario.contrasena, [Validators.required]),
      admin: new FormControl(this.usuario.admin, [Validators.required])
    })
  }

  ngOnInit(): void {
    
  }
  save(){
    const usuario : Users = {
      id:this.usuario.id,
      nombre: this.formulario.value.nombre,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
    this.store.dispatch(editUser({user: usuario}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }
}
