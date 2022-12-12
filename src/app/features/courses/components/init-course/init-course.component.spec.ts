import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitCourseComponent } from './init-course.component';

describe('InitCourseComponent', () => {
  let component: InitCourseComponent;
  let fixture: ComponentFixture<InitCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
