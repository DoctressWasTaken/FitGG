import { TestBed } from '@angular/core/testing';

import { WindowHandlerService } from './window-handler.service';

describe('WindowHandlerService', () => {
  let service: WindowHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
