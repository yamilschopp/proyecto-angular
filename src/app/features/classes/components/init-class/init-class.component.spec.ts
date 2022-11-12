import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitClassComponent } from './init-class.component';

describe('InitClassComponent', () => {
  let component: InitClassComponent;
  let fixture: ComponentFixture<InitClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
