import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() movies: any;
  pages: any;
  limit: number = 20;
  pagesTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.pagesTotal = this.movies.length / this.limit || 0;
    this.pages = new Array(this.pagesTotal);
  }

}
