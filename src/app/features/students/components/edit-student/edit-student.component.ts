import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from '../../../../models/students';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  estudiante!: any;
  suscripcion: any;
  formStudent!: FormGroup;
  id!:number;


  constructor(
    private estudianteService: StudentsService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));
    this.estudiante = this.estudianteService.obtenerEstudianteId(this.id);


    this.formStudent = new FormGroup({
      dni: new FormControl(this.estudiante.dni, [Validators.required]),
      nombre: new FormControl(this.estudiante.nombre, [Validators.required]),
      apellido: new FormControl(this.estudiante.apellido, [Validators.required]),
      fechaNacimiento: new FormControl(this.estudiante.fechaNacimiento, [Validators.required]),
      fechaAlta: new FormControl(this.estudiante.fechaAlta, [Validators.required])
    })

  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    
  }
  save(){
    let c: Students = {
      idStudent : this.id,
      dni: this.formStudent.value.dni,
      nombre: this.formStudent.value.nombre,
      apellido: this.formStudent.value.apellido,
      fechaNacimiento: this.formStudent.value.fechaNacimiento,
      fechaAlta: this.formStudent.value.fechaAlta,
      deleted: false,
    }
    this.estudianteService.editarEstudiante(c);

    this.router.navigate(['features/estudiantes'])
  }
}
