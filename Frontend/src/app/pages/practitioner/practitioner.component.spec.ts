import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PractitionerComponent } from './practitioner.component';

describe('PractitionerComponent', () => {
  let component:PractitionerComponent;
  let fixture: ComponentFixture<PractitionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
