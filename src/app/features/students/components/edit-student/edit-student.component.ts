import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentState } from 'src/app/models/student.state';
import { Students } from 'src/app/models/students';
import { editStudent } from '../../state/students.actions';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public estudiante: Students,
    private store: Store<StudentState>,
  )
  {

    this.formulario = new FormGroup({
      dni: new FormControl(this.estudiante.dni, [Validators.required]),
      nombre: new FormControl(this.estudiante.nombre, [Validators.required]),
      apellido: new FormControl(this.estudiante.apellido, [Validators.required]),
      fechaNacimiento: new FormControl(this.estudiante.fechaNacimiento, [Validators.required]),
      fechaAlta: new FormControl(this.estudiante.fechaAlta, [Validators.required])
    })
  }

  ngOnInit(): void {
    
  }

  save(){
    const student : Students = {
      idStudent : this.estudiante.idStudent,
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      fechaAlta: this.formulario.value.fechaAlta,
    }
    this.store.dispatch(editStudent({student: student}));
    this.dialogRef.close();
  }
  cancelar(){
    this.dialogRef.close()
  }
}
