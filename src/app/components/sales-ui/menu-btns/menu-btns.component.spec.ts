import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBtnsComponent } from './menu-btns.component';

describe('MenuBtnsComponent', () => {
  let component: MenuBtnsComponent;
  let fixture: ComponentFixture<MenuBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
