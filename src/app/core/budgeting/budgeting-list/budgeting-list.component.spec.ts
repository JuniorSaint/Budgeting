import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingListComponent } from './budgeting-list.component';

describe('BudgetingListComponent', () => {
  let component: BudgetingListComponent;
  let fixture: ComponentFixture<BudgetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
