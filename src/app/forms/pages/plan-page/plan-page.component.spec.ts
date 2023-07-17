import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPageComponent } from './plan-page.component';

describe('PlanPageComponent', () => {
  let component: PlanPageComponent;
  let fixture: ComponentFixture<PlanPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPageComponent]
    });
    fixture = TestBed.createComponent(PlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
