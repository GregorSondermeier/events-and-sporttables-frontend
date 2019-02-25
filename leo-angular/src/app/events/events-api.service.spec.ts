import { TestBed } from '@angular/core/testing';

import { FdlEventsApiService } from './events-api.service';

describe('EventsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlEventsApiService = TestBed.get(FdlEventsApiService);
    expect(service).toBeTruthy();
  });
});
