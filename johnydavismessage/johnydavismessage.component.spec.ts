import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnydavismessageComponent } from './johnydavismessage.component';

describe('JohnydavismessageComponent', () => {
  let component: JohnydavismessageComponent;
  let fixture: ComponentFixture<JohnydavismessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnydavismessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnydavismessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
