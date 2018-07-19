import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'px-subtitles-settings',
  templateUrl: './subtitles-settings.component.html',
  styleUrls: ['./subtitles-settings.component.scss']
})
export class SubtitlesSettingsComponent implements OnInit {

  isAutosubsSet: boolean = false;
  dialogue: string = 'ov';
  narration: string = 'ov';
  graphics: string = 'ov';

  ngOnInit() {
  }

  toggleAutosubs(): void {
    this.isAutosubsSet = !this.isAutosubsSet;
  }

  subtitlesSelected(): boolean {
    let subsSelected = false;
    let dropdowns = [this.dialogue, this.narration, this.graphics];

    for (let i = 0; i < dropdowns.length; i++) {
  		if (dropdowns[i] === 'subtitled') {
        subsSelected = true;
      }
  	}

    return subsSelected;
  }

}
