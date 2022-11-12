import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/models/students';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  estudiantes!: Students[];
  suscripcion: any;
  formStudent!: FormGroup;
  id!:number;

  constructor(
    private estudianteService: StudentsService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.suscripcion = this.estudianteService.obtenerEstudiantes().subscribe({
      next: (item: Students[]) => {
        this.estudiantes = item;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.formStudent = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      fechaAlta: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }
  ngOnDestroy(){
    
  }
  save(){

    let idMax:number = Math.max.apply(null, this.estudiantes.map(o => o.idStudent));

    let c: Students = {
      idStudent: idMax+1,
      dni: this.formStudent.value.dni,
      nombre: this.formStudent.value.nombre,
      apellido: this.formStudent.value.apellido,
      fechaNacimiento: this.formStudent.value.fechaNacimiento,
      fechaAlta: this.formStudent.value.fechaAlta,
      deleted: false,
    }
      this.estudianteService.agregarEstudiante(c);
      this.router.navigate(['features/estudiantes']);
  }
}
