import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowidComponent } from './showid.component';

describe('AssociateComponent', () => {
  let component: ShowidComponent;
  let fixture: ComponentFixture<ShowidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
