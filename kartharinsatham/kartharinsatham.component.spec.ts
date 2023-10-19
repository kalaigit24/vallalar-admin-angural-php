import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartharinsathamComponent } from './kartharinsatham.component';

describe('KartharinsathamComponent', () => {
  let component: KartharinsathamComponent;
  let fixture: ComponentFixture<KartharinsathamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartharinsathamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartharinsathamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
