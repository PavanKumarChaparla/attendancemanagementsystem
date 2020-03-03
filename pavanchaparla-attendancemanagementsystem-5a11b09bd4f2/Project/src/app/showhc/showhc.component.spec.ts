import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhcComponent } from './showhc.component';

describe('ShowhcComponent', () => {
  let component: ShowhcComponent;
  let fixture: ComponentFixture<ShowhcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
