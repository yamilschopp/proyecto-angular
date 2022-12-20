import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClassesEffects } from './classes.effects';

describe('ClassesEffects', () => {
  let actions$: Observable<any>;
  let effects: ClassesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClassesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ClassesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
