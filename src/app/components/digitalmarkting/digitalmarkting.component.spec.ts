import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarktingComponent } from './digitalmarkting.component';

describe('DigitalmarktingComponent', () => {
  let component: DigitalmarktingComponent;
  let fixture: ComponentFixture<DigitalmarktingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalmarktingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalmarktingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
