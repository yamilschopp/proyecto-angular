import { Alumno } from '../models/alumno';

export class Datos{
    static alumnos: Alumno[] = [
        {
           id: 1,
            nombre: 'Yamil',
            apellido: 'Schopp',
            dni: 35752721,
            curso: 'Javascript',
        },
        {
           id: 2,
            nombre: 'Nicolas',
            apellido: 'Schopp',
            dni: 3356782,
            curso: 'Desarrollo Web',
        },
        {
           id: 3,
            nombre: 'Romina',
            apellido: 'Balbin',
            dni: 30567898,
            curso: 'Desarrollo Full Stack',
        },
        {
           id: 4,
            nombre: 'Paola',
            apellido: 'Gimenez',
            dni: 31256623,
            curso: 'Javascript',
        },
        {
           id: 5,
            nombre: 'Marcos',
            apellido: 'Martin',
            dni: 35655215,
            curso: 'Desarrollo Web',
        },
        {
           id: 6,
            nombre: 'Matias',
            apellido: 'josviack',
            dni: 32346987,
            curso: 'Phyton',
        },
    ];
  static estudiantes: Alumno[];
  }