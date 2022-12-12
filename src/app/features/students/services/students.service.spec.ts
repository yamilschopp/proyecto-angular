import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);
  });


});
