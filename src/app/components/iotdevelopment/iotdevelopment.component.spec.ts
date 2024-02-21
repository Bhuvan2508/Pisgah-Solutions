import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTdevelopmentComponent } from './iotdevelopment.component';
import { DomSanitizer } from '@angular/platform-browser';


describe('IOTdevelopmentComponent', () => {
  let component: IOTdevelopmentComponent;
  let fixture: ComponentFixture<IOTdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOTdevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOTdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

