import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'px-usage-modal-online',
  templateUrl: './usage-modal-online.component.html',
  styleUrls: ['./usage-modal-online.component.scss']
})
export class UsageModalOnlineComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
