import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSlidebarComponent } from './account-slidebar.component';

describe('AccountSlidebarComponent', () => {
  let component: AccountSlidebarComponent;
  let fixture: ComponentFixture<AccountSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSlidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
