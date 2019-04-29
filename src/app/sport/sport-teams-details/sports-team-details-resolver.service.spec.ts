import { TestBed } from '@angular/core/testing';

import { FdlSportsTeamDetailsResolverService } from './sports-team-details-resolver.service';

describe('SportsTeamDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlSportsTeamDetailsResolverService = TestBed.get(FdlSportsTeamDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
