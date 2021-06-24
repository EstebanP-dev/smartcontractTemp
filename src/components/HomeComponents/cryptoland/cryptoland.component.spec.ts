import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptolandComponent } from './cryptoland.component';

describe('CryptolandComponent', () => {
  let component: CryptolandComponent;
  let fixture: ComponentFixture<CryptolandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptolandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
