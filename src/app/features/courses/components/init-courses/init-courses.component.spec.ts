import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitCoursesComponent } from './init-courses.component';

describe('InitCoursesComponent', () => {
  let component: InitCoursesComponent;
  let fixture: ComponentFixture<InitCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
