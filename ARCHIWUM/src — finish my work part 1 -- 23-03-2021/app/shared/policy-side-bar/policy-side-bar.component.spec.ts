import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySideBarComponent } from './policy-side-bar.component';

describe('PolicySideBarComponent', () => {
  let component: PolicySideBarComponent;
  let fixture: ComponentFixture<PolicySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
