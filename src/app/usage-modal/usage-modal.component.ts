import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'px-usage-modal',
  templateUrl: './usage-modal.component.html',
  styleUrls: ['./usage-modal.component.scss']
})
export class UsageModalComponent implements OnInit {

  @Input() usage: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {size: 'sm', ariaLabelledBy: 'modal-basic-title'});
  }

}
