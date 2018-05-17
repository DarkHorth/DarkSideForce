import { TestBed, inject } from '@angular/core/testing';

import { CoursesServices } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesServices]
    });
  });

  it('should be created', inject([CoursesServices], (service: CoursesServices) => {
    expect(service).toBeTruthy();
  }));
});
