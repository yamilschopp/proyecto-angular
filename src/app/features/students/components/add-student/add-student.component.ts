import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentState } from 'src/app/models/student.state';
import { Students } from 'src/app/models/students';
import { addStudent } from '../../state/students.actions';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  formulario!: FormGroup;
  suscripcion: any;
  idMax: number = 1;
  estudiantes!: Students[];
  estudiantes$!: Observable<Students[]>;

  constructor(
    public dialogRef: MatDialogRef<AddStudentComponent>,
    private store: Store<StudentState>,
  )
  {
    this.formulario = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      fechaAlta: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void{

    this.suscripcion = this.estudiantes$.subscribe({
      next: (estudiantes: Students[]) => {
        this.estudiantes = estudiantes;
        this.idMax = Math.max.apply(null, this.estudiantes.map(o => o.idStudent));
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }
  save(){
    const student : Students = {
      idStudent : this.idMax+1,
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      fechaAlta: this.formulario.value.fechaAlta,
    }
    this.store.dispatch(addStudent({student: student}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }
}
