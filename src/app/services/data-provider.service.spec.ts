import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('DataProviderService', () => {
  let service: DataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProviderService,{
        provide:HttpClient,
        useClass: HttpClientMock
      }]
    });
    service = TestBed.inject(DataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
