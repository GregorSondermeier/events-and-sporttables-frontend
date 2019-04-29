import { TestBed } from '@angular/core/testing';

import { FdlEventsDetailsResolverService } from './events-details-resolver.service';

describe('FdlEventsDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlEventsDetailsResolverService = TestBed.get(FdlEventsDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
