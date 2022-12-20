import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentClassesComponent } from './add-student-classes.component';

describe('AddStudentClassesComponent', () => {
  let component: AddStudentClassesComponent;
  let fixture: ComponentFixture<AddStudentClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
