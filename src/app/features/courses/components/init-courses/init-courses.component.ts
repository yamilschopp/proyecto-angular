import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCoursesComponent } from '../add-courses/add-courses.component';

@Component({
  selector: 'app-init-courses',
  templateUrl: './init-courses.component.html',
  styleUrls: ['./init-courses.component.css']
})
export class InitCoursesComponent implements OnInit{



  constructor(
    private dialog: MatDialog
  )
  {
    

  }

  ngOnInit(): void {

    
  }

  agregarCurso(){
    this.dialog.open(AddCoursesComponent,
      {
        width: '550px',
      }

    )
  }
}
