import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'px-subtitler',
  templateUrl: './subtitler.component.html',
  styleUrls: ['./subtitler.component.scss']
})
export class SubtitlerComponent implements OnInit {
  @ViewChild('subtitler') target;

  constructor() { }

  ngOnInit() {
    const element = this.target.nativeElement;

    setTimeout(function() {
      element.classList.add('visible');
    }, 0);
  }

}
