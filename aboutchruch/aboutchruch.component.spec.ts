import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutchruchComponent } from './aboutchruch.component';

describe('AboutchruchComponent', () => {
  let component: AboutchruchComponent;
  let fixture: ComponentFixture<AboutchruchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutchruchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutchruchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
