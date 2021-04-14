import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from '../shared/model/pagination.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize: number;
  @Input() length: number;
  @Input() pageSizeOptions: any[];

  public pagination: Pagination;
  /*
  = {
    pageSize: 4,
    length: 100,
    pageSizeOptions: [2, 3, 4, 5]
  }
  */
  constructor() {}

  ngOnInit(): void {
    this.pagination = {
      pageSize: this.pageSize,
      length: this.length,
      pageSizeOptions: this.pageSizeOptions,
    };
  }
}
