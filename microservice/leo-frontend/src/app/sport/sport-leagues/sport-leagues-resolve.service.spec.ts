import { TestBed } from '@angular/core/testing';

import { FdlSportLeaguesResolverService } from './sport-leagues-resolver.service';

describe('SportLeaguesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlSportLeaguesResolverService = TestBed.get(FdlSportLeaguesResolverService);
    expect(service).toBeTruthy();
  });
});
