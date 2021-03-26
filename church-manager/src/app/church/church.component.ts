import { Component, OnInit } from '@angular/core';
import { faEdit, faEllipsisH, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss']
})
export class ChurchComponent implements OnInit {
  public faEllipsis = faEllipsisH;
  public faEdit = faEdit;
  public faMinusCircle = faMinusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
