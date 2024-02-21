import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItconsultingComponent } from './itconsulting.component';

describe('ItconsultingComponent', () => {
  let component: ItconsultingComponent;
  let fixture: ComponentFixture<ItconsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItconsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItconsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
