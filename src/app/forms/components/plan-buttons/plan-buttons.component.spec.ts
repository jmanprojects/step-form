import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanButtonsComponent } from './plan-buttons.component';

describe('PlanButtonsComponent', () => {
  let component: PlanButtonsComponent;
  let fixture: ComponentFixture<PlanButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanButtonsComponent]
    });
    fixture = TestBed.createComponent(PlanButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
