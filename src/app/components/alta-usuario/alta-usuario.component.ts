import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  formularioAlumno: FormGroup;
  cursos: string[] = ['React JS', 'Angular', 'Vue JS'];


  constructor( public dialogRef: MatDialogRef<AltaUsuarioComponent>, private fb: FormBuilder) {
    this.formularioAlumno = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      curso: new FormControl('', [Validators.required]),
    });
   }


   cambiarCurso(e: any) {
    
  }

  ngOnInit(): void {
  }

  agregarAlumno(){
    this.dialogRef.close(this.formularioAlumno.value);
  }

}
