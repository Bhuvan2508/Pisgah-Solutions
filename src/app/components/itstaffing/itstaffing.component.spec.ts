import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItstaffingComponent } from './itstaffing.component';

describe('ItstaffingComponent', () => {
  let component: ItstaffingComponent;
  let fixture: ComponentFixture<ItstaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItstaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItstaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
