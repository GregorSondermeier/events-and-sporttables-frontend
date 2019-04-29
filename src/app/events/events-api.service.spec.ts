import { TestBed } from '@angular/core/testing';

import { GsEventsApiService } from './events-api.service';

describe('EventsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsEventsApiService = TestBed.get(GsEventsApiService);
    expect(service).toBeTruthy();
  });
});
