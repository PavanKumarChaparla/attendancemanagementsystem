import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhealthcardComponent } from './addhealthcard.component';

describe('AddhealthcardComponent', () => {
  let component: AddhealthcardComponent;
  let fixture: ComponentFixture<AddhealthcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhealthcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhealthcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
