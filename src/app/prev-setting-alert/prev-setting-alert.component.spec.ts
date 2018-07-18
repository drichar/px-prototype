import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevSettingAlertComponent } from './prev-setting-alert.component';

describe('PrevSettingAlertComponent', () => {
  let component: PrevSettingAlertComponent;
  let fixture: ComponentFixture<PrevSettingAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevSettingAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevSettingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
