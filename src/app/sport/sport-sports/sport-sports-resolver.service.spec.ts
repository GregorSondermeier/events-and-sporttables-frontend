import { TestBed } from '@angular/core/testing';

import { SportSportsResolverService } from './sport-sports-resolver.service';

describe('SportSportsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportSportsResolverService = TestBed.get(SportSportsResolverService);
    expect(service).toBeTruthy();
  });
});
