import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public ESTUDIANTES: Array<Estudiante> = [
    {
      legajo: 254,
      nombre: 'Yamil',
      apellido: 'Schopp',
      dni: 35752721,
      curso: 'Javascript',
    },
    {
      legajo: 128,
      nombre: 'Nicolas',
      apellido: 'Schopp',
      dni: 3356782,
      curso: 'Desarrollo Web',
    },
    {
      legajo: 100,
      nombre: 'Romina',
      apellido: 'Balbin',
      dni: 30567898,
      curso: 'Desarrollo Full Stack',
    },
    {
      legajo: 250,
      nombre: 'Paola',
      apellido: 'Gimenez',
      dni: 31256623,
      curso: 'Javascript',
    },
    {
      legajo: 180,
      nombre: 'Marcos',
      apellido: 'Martin',
      dni: 35655215,
      curso: 'Desarrollo Web',
    },
    {
      legajo: 180,
      nombre: 'Matias',
      apellido: 'josviack',
      dni: 32346987,
      curso: 'Phyton',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
