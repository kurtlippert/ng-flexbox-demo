/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebcastComponent } from './webcast.component';

describe('WebcastComponent', () => {
  let component: WebcastComponent;
  let fixture: ComponentFixture<WebcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
