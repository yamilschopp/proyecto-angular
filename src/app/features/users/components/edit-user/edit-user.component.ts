import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

usuario!: any;
suscripcion: any;
formulario!: FormGroup;
id!:number;

  constructor(
    private router: Router,
    private _Activatedroute:ActivatedRoute,
    private userService: UsersService
  ) { 

    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));


  }

  ngOnInit(): void {
    this.usuario = this.userService.obtenerUsuarioId(this.id);
    this.formulario = new FormGroup({
      nombre: new FormControl(this.usuario.nombre, [Validators.required]),
      contrasena: new FormControl(this.usuario.contrasena, [Validators.required])
    })

  }

  save(){


    let c: Users = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      contrasena: this.formulario.value.contrasena,
    }


    this.userService.editarUsuario(c);

    this.router.navigate(['features/usuarios'])
  }
}
