import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() filmes:any;

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    console.log('---------------- ', this.filmes);
    // TODO document why this method 'ngOnInit' is empty
  }

}
