import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Users } from '../../../../models/users';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosCompletos!: Users[];
  usuarios$!: Observable<Users[]>;
  formulario: FormGroup
  suscripcion:any;
  constructor(
    private sesionService: SessionService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      usuario: new FormControl('',[Validators.required]),
      contrasena: new FormControl('',[Validators.required])
  })
  this.usuarios$ = sesionService.obtenerDatos();

}

  ngOnInit(): void {
    this.suscripcion = this.usuarios$.subscribe({
      next: (usuario: Users[]) => {
        this.usuariosCompletos = usuario;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  ngOnDestroy(): void{
    
  }

  login(){
    let usuarioConsultar = this.usuariosCompletos.find(item => item.nombre ==this.formulario.value.usuario);

    if(usuarioConsultar?.contrasena !== this.formulario.value.contrasena){
      alert("Error en nombre de usuario o contraseña")
    }
    else{
      this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena);
      this.router.navigate(['inicio']);
    }

  }
}
