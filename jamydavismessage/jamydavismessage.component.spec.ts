import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamydavismessageComponent } from './jamydavismessage.component';

describe('JamydavismessageComponent', () => {
  let component: JamydavismessageComponent;
  let fixture: ComponentFixture<JamydavismessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamydavismessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamydavismessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
