import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponentsComponent } from './presentation-components.component';

describe('PresentationComponentsComponent', () => {
  let component: PresentationComponentsComponent;
  let fixture: ComponentFixture<PresentationComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationComponentsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
