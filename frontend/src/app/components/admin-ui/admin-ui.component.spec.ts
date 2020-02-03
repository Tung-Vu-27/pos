import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUIComponent } from './admin-ui.component';

describe('AdminUIComponent', () => {
  let component: AdminUIComponent;
  let fixture: ComponentFixture<AdminUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
