import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from '../../../models/sessions';
import { SessionService } from '../../authentication/services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  sesion !: Sesion;
  suscripcion:any;

  constructor(
    private sesionService: SessionService,
    private router: Router
  ) {

    this.suscripcion = this.sesionService.obtenerSesion().subscribe({
      next: (sesion: Sesion) => {
        this.sesion = sesion;
        
      },
      error: (error) => {
        console.error(error);
      }
    });

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  // logout(){
  //   this.sesionService.logout(this.sesion.usuarioActivo?.nombre, this.sesion.usuarioActivo?.contrasena)

  //     this.router.navigate(['authentication/login']);
  // }
}
