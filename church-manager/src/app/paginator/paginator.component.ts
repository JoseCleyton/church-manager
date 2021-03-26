import { Component, OnInit } from '@angular/core';
import { Pagination } from '../shared/model/pagination.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  public pagination: Pagination = {
    pageSize: 4,
    length: 100,
    pageSizeOptions: [2, 3, 4, 5]
  }
  constructor() { }

  ngOnInit(): void {

  }

}
