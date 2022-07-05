import { TestBed } from '@angular/core/testing';

import { HttpErrorHandlerService } from './http-error-handler.service';

describe('HttpErrorHandlerService', () => {
  let service: HttpErrorHandlerService<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
