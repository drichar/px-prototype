import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'px-prev-setting-alert',
  templateUrl: './prev-setting-alert.component.html',
  styleUrls: ['./prev-setting-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrevSettingAlertComponent implements OnInit {

  public alerts: Array<IAlert> = [];

  constructor(private modalService: NgbModal) {
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

  open(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

}

export interface IAlert {
  id: number;
  type: string;
}
