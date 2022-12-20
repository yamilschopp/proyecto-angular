import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitUsersComponent } from './init-users.component';

describe('InitUsersComponent', () => {
  let component: InitUsersComponent;
  let fixture: ComponentFixture<InitUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
