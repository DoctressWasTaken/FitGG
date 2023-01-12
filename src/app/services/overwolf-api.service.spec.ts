import { TestBed } from '@angular/core/testing';

import { OverwolfApiService } from './overwolf-api.service';

describe('OverwolfApiService', () => {
  let service: OverwolfApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverwolfApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
