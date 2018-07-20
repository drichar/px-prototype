import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitlerComponent } from './subtitler.component';

describe('SubtitlerComponent', () => {
  let component: SubtitlerComponent;
  let fixture: ComponentFixture<SubtitlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
