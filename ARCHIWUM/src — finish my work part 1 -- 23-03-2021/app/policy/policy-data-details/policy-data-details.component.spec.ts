import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDataDetailsComponent } from './policy-data-details.component';

describe('PolicyDataDetailsComponent', () => {
  let component: PolicyDataDetailsComponent;
  let fixture: ComponentFixture<PolicyDataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
