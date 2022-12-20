import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassesComponent } from '../add-classes/add-classes.component';

@Component({
  selector: 'app-init-classes',
  templateUrl: './init-classes.component.html',
  styleUrls: ['./init-classes.component.css']
})
export class InitClassesComponent implements OnInit{


  constructor(
    private dialog4: MatDialog
  )
  {

  }

  ngOnInit(): void {
    
  }

  agregar(){
    this.dialog4.open(AddClassesComponent,
      {
        width: '550px',
      }

    )
  }
}
