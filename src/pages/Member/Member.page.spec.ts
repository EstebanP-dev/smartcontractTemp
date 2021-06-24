import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPage } from './Member.page';

describe('PageMainComponent', () => {
  let component: MemberPage;
  let fixture: ComponentFixture<MemberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
