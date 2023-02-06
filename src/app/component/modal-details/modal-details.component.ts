import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent {

  @Input() movie: any;
  @Input() openModal: any;
  open: boolean = false;


  constructor() {
    this.open = this.openModal;
  }

  toggle() {
    this.open = !this.open;
  }


}
