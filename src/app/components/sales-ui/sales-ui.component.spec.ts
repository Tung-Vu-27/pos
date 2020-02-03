import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUIComponent } from './sales-ui.component';

describe('SalesUIComponent', () => {
  let component: SalesUIComponent;
  let fixture: ComponentFixture<SalesUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
