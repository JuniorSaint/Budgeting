/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BudgetingService } from './budgeting.service';

describe('Service: Budgeting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetingService]
    });
  });

  it('should ...', inject([BudgetingService], (service: BudgetingService) => {
    expect(service).toBeTruthy();
  }));
});
