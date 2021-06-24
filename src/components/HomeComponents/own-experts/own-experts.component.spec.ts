import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnExpertsComponent } from './own-experts.component';

describe('OwnExpertsComponent', () => {
  let component: OwnExpertsComponent;
  let fixture: ComponentFixture<OwnExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
