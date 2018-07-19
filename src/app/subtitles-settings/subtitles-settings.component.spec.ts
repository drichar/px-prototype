import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitlesSettingsComponent } from './subtitles-settings.component';

describe('SubtitlesSettingsComponent', () => {
  let component: SubtitlesSettingsComponent;
  let fixture: ComponentFixture<SubtitlesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitlesSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitlesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
