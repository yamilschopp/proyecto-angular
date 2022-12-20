import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-init-students',
  templateUrl: './init-students.component.html',
  styleUrls: ['./init-students.component.css']
})
export class InitStudentsComponent {
  constructor(
    private dialog3: MatDialog
  )
  {

  }

  ngOnInit(): void {
    
  }
  agregarEstudiante(){
    this.dialog3.open(AddStudentComponent,
      {
        width: '600px',
      }

    )
  }
}
