import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('Prueba Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El formulario se mantiene invalido cuando ingreso unicamente el nombre del usuario', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];

    usuario.setValue('prueba');

    expect(formulario.valid).toBeFalse();
  })
});
