import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingFormComponent } from './budgeting-form.component';

describe('BudgetingFormComponent', () => {
  let component: BudgetingFormComponent;
  let fixture: ComponentFixture<BudgetingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
