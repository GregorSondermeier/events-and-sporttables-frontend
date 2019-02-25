import { TestBed } from '@angular/core/testing';

import { FdlCommonConfigService } from './common-config.service';

describe('CommonConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdlCommonConfigService = TestBed.get(FdlCommonConfigService);
    expect(service).toBeTruthy();
  });
});
