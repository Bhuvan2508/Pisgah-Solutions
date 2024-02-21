import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudcomputingComponent } from './cloudcomputing.component';

describe('CloudcomputingComponent', () => {
  let component: CloudcomputingComponent;
  let fixture: ComponentFixture<CloudcomputingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudcomputingComponent]
    });
    fixture = TestBed.createComponent(CloudcomputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
