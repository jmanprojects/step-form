import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickButtonsComponent } from './pick-buttons.component';

describe('PickButtonsComponent', () => {
  let component: PickButtonsComponent;
  let fixture: ComponentFixture<PickButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickButtonsComponent]
    });
    fixture = TestBed.createComponent(PickButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
