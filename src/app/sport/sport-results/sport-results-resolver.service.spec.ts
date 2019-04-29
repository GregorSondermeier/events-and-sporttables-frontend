import { TestBed } from '@angular/core/testing';

import { GsSportResultsResolverService } from './sport-results-resolver.service';

describe('SportResultsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsSportResultsResolverService = TestBed.get(GsSportResultsResolverService);
    expect(service).toBeTruthy();
  });
});
