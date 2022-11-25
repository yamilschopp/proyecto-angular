import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, Subscription } from 'rxjs';
import { Students } from 'src/app/models/students';
import { StudentsService } from '../../services/students.service';
import { ViewStudentComponent } from '../view-student/view-student.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  estudiante!: Students;
  estudiantes$!: Observable<Students[]>;
  estudiantes!: Array<Students>;
  suscripcion!: Subscription;
  columnasEstudiantes: string[] = [
    'id',
    'dni',
    'nombreCompleto',
    'fechaNacimiento',
    'fechaAlta',
    'acciones',
  ];
  dataSourceEstudiantes: MatTableDataSource<Students>;

  constructor(
    private estudianteService: StudentsService,
    private router: Router,
    private dialog: MatDialog
  ) {

    this.dataSourceEstudiantes = new MatTableDataSource<Students>(
      // this.estudiantes
    );
  }

  ngOnInit(): void {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantes()
    .pipe(
      map((estudiantes: Students[]) =>
        estudiantes.filter((estudiante: Students) => estudiante.deleted == false)
      )
    );
  this.suscripcion = this.estudiantes$.subscribe({
    next: (estudiantes: Students[]) => {
      this.estudiantes = estudiantes;
      this.dataSourceEstudiantes.data = this.estudiantes;
    },
    error: (error) => {
      console.error(error);
    },
  });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSourceEstudiantes.paginator = this.paginator;
  }

  eliminar(id: number) {
    if (confirm('Esta seguro de eliminar el elemento id: ' + id)) {
      this.estudianteService.eliminarEstudiante(id);
    }
    this.dataSourceEstudiantes = new MatTableDataSource<Students>(
      this.estudiantes
    );
  }
  editar(id: number) {
    this.router.navigate(['features/estudiantes/edit', { id: id }]);
  }
  consultar(id: number) {
    this.estudiante =
      this.estudiantes[
        this.estudiantes.findIndex((estudiante) => estudiante.idStudent == id)
      ];
    let dialog = this.dialog.open(ViewStudentComponent, {
      width: '40%',
      height: '40%',
      data: {
        dataKey: this.estudiante,
      },
    });
  }
}
