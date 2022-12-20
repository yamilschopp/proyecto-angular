import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/models/classes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  obtener() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Classes[]>{
    return this.http.get<Classes[]>(`${environment.api}/clases`);
  }

  add(clase: Classes): Observable<Classes>{
    return this.http.post<Classes>(`${environment.api}/clases`, clase);
  }

  edit(clase: Classes): Observable<Classes>{
    return this.http.put<Classes>(`${environment.api}/clases/${clase.id}`, clase);
  }

  delete(id: number): Observable<Classes>{
    return this.http.delete<Classes>(`${environment.api}/clases/${id}`);
  }

  
}
