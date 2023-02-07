import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() filmes: any;
  @Input() singleCard = false;
  @Output('item') movieSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  movieId(id: string) {
    this.movieSelected.emit(id);
  }
}
