import { TestBed } from '@angular/core/testing';

import { GsSportsTeamDetailsResolverService } from './sports-team-details-resolver.service';

describe('SportsTeamDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsSportsTeamDetailsResolverService = TestBed.get(GsSportsTeamDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
