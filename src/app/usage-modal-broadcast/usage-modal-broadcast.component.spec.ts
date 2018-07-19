import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageModalBroadcastComponent } from './usage-modal-broadcast.component';

describe('UsageModalBroadcastComponent', () => {
  let component: UsageModalBroadcastComponent;
  let fixture: ComponentFixture<UsageModalBroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageModalBroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageModalBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
