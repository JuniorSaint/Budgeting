/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeServiceService } from './type-service.service';

describe('Service: TypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeServiceService]
    });
  });

  it('should ...', inject([TypeServiceService], (service: TypeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
