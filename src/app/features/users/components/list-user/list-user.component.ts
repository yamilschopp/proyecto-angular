import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usuarios$!: Observable<Users[]>;
  suscripcion: any;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarios$ = this.userService.obtenerUsuarios().pipe(
      map((usuarios: Users[]) => usuarios));
      this.suscripcion = this.usuarios$.subscribe({
        next: (estudiantes: Users[]) => {

        },
        error: (error) => {
          console.error(error);
        }
    });
  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  eliminar(item: string){
    if(confirm("Esta seguro de eliminar el elemento nombre: "+item)) {
      this.userService.eliminarUsuario(item);
    }
    this.usuarios$ = this.userService.obtenerUsuarios().pipe(
      map((usuarios: Users[]) => usuarios));
  }
  editar(id: number){
    this.router.navigate(['features/usuarios/edit',{id:id}]);
  }
}
