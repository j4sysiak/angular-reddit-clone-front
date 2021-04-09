import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchPoliciesComponent } from './view-search-policies.component';

describe('ViewSearchPoliciesComponent', () => {
  let component: ViewSearchPoliciesComponent;
  let fixture: ComponentFixture<ViewSearchPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSearchPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
