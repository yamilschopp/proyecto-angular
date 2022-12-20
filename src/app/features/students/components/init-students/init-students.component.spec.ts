import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitStudentsComponent } from './init-students.component';

describe('InitStudentsComponent', () => {
  let component: InitStudentsComponent;
  let fixture: ComponentFixture<InitStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
