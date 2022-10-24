import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AltaUsuarioComponent } from '../alta-usuario/alta-usuario.component';
import { Datos } from 'src/app/data/alumnos';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  // public ESTUDIANTES: Array<Estudiante> = [
  //   {
  //     legajo: 254,
  //     nombre: 'Yamil',
  //     apellido: 'Schopp',
  //     dni: 35752721,
  //     curso: 'Javascript',
  //   },
  //   {
  //     legajo: 128,
  //     nombre: 'Nicolas',
  //     apellido: 'Schopp',
  //     dni: 3356782,
  //     curso: 'Desarrollo Web',
  //   },
  //   {
  //     legajo: 100,
  //     nombre: 'Romina',
  //     apellido: 'Balbin',
  //     dni: 30567898,
  //     curso: 'Desarrollo Full Stack',
  //   },
  //   {
  //     legajo: 250,
  //     nombre: 'Paola',
  //     apellido: 'Gimenez',
  //     dni: 31256623,
  //     curso: 'Javascript',
  //   },
  //   {
  //     legajo: 180,
  //     nombre: 'Marcos',
  //     apellido: 'Martin',
  //     dni: 35655215,
  //     curso: 'Desarrollo Web',
  //   },
  //   {
  //     legajo: 180,
  //     nombre: 'Matias',
  //     apellido: 'josviack',
  //     dni: 32346987,
  //     curso: 'Phyton',
  //   },
  // ]
  alumnos: Alumno[] = Datos.alumnos;
  columnas: string[] = ['nombre', 'dni', 'curso', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }

  borrar(id : number)
  {
    let position = this.alumnos.findIndex(alumno => alumno.id == id)
    this.alumnos.splice(position, 1)
    this.dataSource.data = this.alumnos;
  }

  openDialog() {
    let dialog = this.dialog.open(AltaUsuarioComponent, {
      width: '50%',
      height: '50%',
      
    });

    dialog.beforeClosed().subscribe(res => {
      if(res != null || res != undefined)
      {
        this.alumnos.push(
          {
            ...res,
            id:this.alumnos.length + 1
          }
        );
        this.dataSource.data = this.alumnos;
      }
    });
  }

}
