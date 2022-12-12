import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitStudentComponent } from './init-student.component';

describe('InitStudentComponent', () => {
  let component: InitStudentComponent;
  let fixture: ComponentFixture<InitStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

