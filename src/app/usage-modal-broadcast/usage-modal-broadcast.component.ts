import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'px-usage-modal-broadcast',
  templateUrl: './usage-modal-broadcast.component.html',
  styleUrls: ['./usage-modal-broadcast.component.scss']
})
export class UsageModalBroadcastComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
