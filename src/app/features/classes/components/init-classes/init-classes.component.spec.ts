import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitClassesComponent } from './init-classes.component';

describe('InitClassesComponent', () => {
  let component: InitClassesComponent;
  let fixture: ComponentFixture<InitClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
