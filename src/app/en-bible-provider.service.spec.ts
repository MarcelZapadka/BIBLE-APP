import { TestBed } from '@angular/core/testing';

import { EnBibleProviderService } from './en-bible-provider.service';

describe('EnBibleProviderService', () => {
  let service: EnBibleProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnBibleProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
