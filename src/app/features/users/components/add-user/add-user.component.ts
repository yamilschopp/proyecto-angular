import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../../../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usuarios!: Users[];
  suscripcion: any;

formulario: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) { 
    this.suscripcion = this.userService.obtenerUsuarios().subscribe({
      next: (item: Users[]) => {
        this.usuarios = item;
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  save(){

    let idMax:number = Math.max.apply(null, this.usuarios.map(o => o.id));

    const usuario: Users = {
      id : idMax+1,
      nombre: this.formulario.value.nombre,
      contrasena: this.formulario.value.contrasena,
    }
      this.userService.agregarUsuario(usuario);
      this.router.navigate(['features/usuarios']);
  }
}
