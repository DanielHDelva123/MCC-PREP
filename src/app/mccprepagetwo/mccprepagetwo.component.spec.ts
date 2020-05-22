import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MccprepagetwoComponent } from './mccprepagetwo.component';

describe('MccprepagetwoComponent', () => {
  let component: MccprepagetwoComponent;
  let fixture: ComponentFixture<MccprepagetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MccprepagetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MccprepagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
