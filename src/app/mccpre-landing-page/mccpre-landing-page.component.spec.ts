import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCCPreLandingPageComponent } from './mccpre-landing-page.component';

describe('MCCPreLandingPageComponent', () => {
  let component: MCCPreLandingPageComponent;
  let fixture: ComponentFixture<MCCPreLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCCPreLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCCPreLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
