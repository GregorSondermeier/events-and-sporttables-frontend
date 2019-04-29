import { TestBed } from '@angular/core/testing';

import { GsEventsDetailsResolverService } from './events-details-resolver.service';

describe('GsEventsDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsEventsDetailsResolverService = TestBed.get(GsEventsDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
