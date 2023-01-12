import { TestBed } from '@angular/core/testing';

import { TempWorkoutService } from './temp-workout.service';

describe('TempWorkoutService', () => {
  let service: TempWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
