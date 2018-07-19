import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'px-usage-modal-theatrical',
  templateUrl: './usage-modal-theatrical.component.html',
  styleUrls: ['./usage-modal-theatrical.component.scss']
})
export class UsageModalTheatricalComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

}
