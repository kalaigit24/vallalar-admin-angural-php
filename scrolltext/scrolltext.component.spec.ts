import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltextComponent } from './scrolltext.component';

describe('ScrolltextComponent', () => {
  let component: ScrolltextComponent;
  let fixture: ComponentFixture<ScrolltextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrolltextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
