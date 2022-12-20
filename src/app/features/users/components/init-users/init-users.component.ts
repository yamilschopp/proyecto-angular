import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from '../add-users/add-users.component';

@Component({
  selector: 'app-init-users',
  templateUrl: './init-users.component.html',
  styleUrls: ['./init-users.component.css']
})
export class InitUsersComponent {
  constructor(
    private dialog2: MatDialog
  )
  {

  }

  ngOnInit(): void {
    
  }
  agregarUsuario(){
    this.dialog2.open(AddUsersComponent,
      {
        width: '550px',
      }

    )
  }
}
