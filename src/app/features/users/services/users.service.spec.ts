import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Servicios de Usuario', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsersService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {


    service.obtenerUsuarios().subscribe((usuarios) => {

      const mockDatos2: any = [{"nombre":"prueba","contrasena":"1234","id":"2"},
      {"nombre":"Pablo","contrasena":"1234","id":"4"},
      {"nombre":"Gonzalez","contrasena":"1234","id":"5"}]   ;

      expect(usuarios).toEqual(mockDatos2);
      done();
    })
  })
});
