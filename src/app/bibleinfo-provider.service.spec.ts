import { TestBed } from '@angular/core/testing';

import { BibleinfoProviderService } from './bibleinfo-provider.service';

describe('BibleinfoProviderService', () => {
  let service: BibleinfoProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleinfoProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
