import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  usuario: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario($event: any): void {
    this.usuario.push($event);
  }

}
