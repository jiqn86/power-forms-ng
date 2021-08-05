import { TestBed } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';

describe('DataProviderService', () => {
  let service: DataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProviderService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
