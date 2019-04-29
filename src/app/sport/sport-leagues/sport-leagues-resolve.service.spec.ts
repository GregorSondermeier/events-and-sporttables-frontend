import { TestBed } from '@angular/core/testing';

import { GsSportLeaguesResolverService } from './sport-leagues-resolver.service';

describe('SportLeaguesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsSportLeaguesResolverService = TestBed.get(GsSportLeaguesResolverService);
    expect(service).toBeTruthy();
  });
});
