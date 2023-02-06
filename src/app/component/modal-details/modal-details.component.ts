import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnChanges{

  @Input() movie: any;
  @Input() openModal: any;
  open: boolean = false;


  constructor() {
    this.open = this.openModal;
  }

  toggle() {
    this.open = !this.open;
  }

  ngOnChanges(item: SimpleChanges) {
   console.log('----- item mudado -----------', item)
   this.open = item.openModal?.currentValue || true;
  }


}
