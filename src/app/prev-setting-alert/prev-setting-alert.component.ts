import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'px-prev-setting-alert',
  templateUrl: './prev-setting-alert.component.html',
  styleUrls: ['./prev-setting-alert.component.scss']
})
export class PrevSettingAlertComponent implements OnInit {

  public alerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
      id: 1,
      type: 'info'
    });
  }

  ngOnInit() {
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}

export interface IAlert {
  id: number;
  type: string;
}
