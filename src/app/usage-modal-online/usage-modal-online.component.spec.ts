import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageModalOnlineComponent } from './usage-modal-online.component';

describe('UsageModalOnlineComponent', () => {
  let component: UsageModalOnlineComponent;
  let fixture: ComponentFixture<UsageModalOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageModalOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageModalOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
