import { TestBed } from '@angular/core/testing';

import { GsCommonConfigService } from './common-config.service';

describe('CommonConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsCommonConfigService = TestBed.get(GsCommonConfigService);
    expect(service).toBeTruthy();
  });
});
