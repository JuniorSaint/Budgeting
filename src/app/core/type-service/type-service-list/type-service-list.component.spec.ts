import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeServiceListComponent } from './type-service-list.component';

describe('TypeServiceListComponent', () => {
  let component: TypeServiceListComponent;
  let fixture: ComponentFixture<TypeServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeServiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
