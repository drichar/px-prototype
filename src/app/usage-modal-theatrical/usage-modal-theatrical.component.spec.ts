import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageModalTheatricalComponent } from './usage-modal-theatrical.component';

describe('UsageModalTheatricalComponent', () => {
  let component: UsageModalTheatricalComponent;
  let fixture: ComponentFixture<UsageModalTheatricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageModalTheatricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageModalTheatricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
