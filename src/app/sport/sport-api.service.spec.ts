import { TestBed } from '@angular/core/testing';

import { GsSportApiService } from './sport-api.service';

describe('SportApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsSportApiService = TestBed.get(GsSportApiService);
    expect(service).toBeTruthy();
  });
});
