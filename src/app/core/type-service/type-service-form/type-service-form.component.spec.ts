import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeServiceFormComponent } from './type-service-form.component';

describe('TypeServiceFormComponent', () => {
  let component: TypeServiceFormComponent;
  let fixture: ComponentFixture<TypeServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
