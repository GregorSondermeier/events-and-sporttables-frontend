import { TestBed } from '@angular/core/testing';

import { FdlSportApiService } from './sport-api.service';

describe('SportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlSportApiService = TestBed.get(FdlSportApiService);
    expect(service).toBeTruthy();
  });
});
