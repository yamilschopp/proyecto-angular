import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() addUsuario: EventEmitter<any> = new EventEmitter<any>();

  formulario : FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formulario = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), this.validarEdad()]],
      email: ['', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('^.*[A-Z]+.*$')]],
      cursos: new FormArray([new FormControl()])
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void{
    console.log(this.formulario.value);
    this.addUsuario.emit(this.formulario.value);
  }

  get cursos(): FormArray {
    return this.formulario.get('cursos') as FormArray;
  }

  agregarCurso(): void {
    this.cursos.push(new FormControl());
  }

  validarEdad(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return (!Number.isInteger(parseInt(control.value))) ? { errorEdad: true } : null;
    }
  }
}