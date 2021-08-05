import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { DataProviderService } from './data-provider.service';


describe('DataProviderService', () => {
  let service: DataProviderService;
  let httpTestingController: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataProviderService]
    });
    service = TestBed.inject(DataProviderService);
    httpTestingController = TestBed.inject(HttpClientTestingModule)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.getInfo()).toBeTruthy();
  });

});